const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const  { generateAccessToken, generateRefreshToken, generateVerificationAccessToken} = require('../utils/tokenJWT');
const { generateSixDigitCode, generateCodeVerificationHTML, generateResendCodeHTML, generateForgotPasswordEmailHTML } = require('../utils/utils');
const { sendEmail } = require('../utils/mailer');

const signUp = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        const { firstName, lastName, email, password, profileImage } = req.body;
        if(!email || !password || !firstName || !lastName) return res.status(400).json({success: false, message: 'Missing data', reqBody: req.body});

        // Validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) return res.status(400).json({success: false, message: `Invalid email format: ${email}`, errorAt: 'email'});

        // Check for existing user
        const existedUser = await User.findOne({ email });

        // If there is an existing user, and it is an unverified account
        // Delete the account and any token that has the user reference of that account.
        if (existedUser) {
            if (existedUser.isVerified) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'The email has already been registered', 
                    errorAt: 'email' 
                });
            }

            await Promise.all([
                Token.deleteOne({ user: existedUser._id }),
                existedUser.deleteOne()
            ]);
        }

        // Create an unverified account
        const newUser = await User.create({firstName, lastName, email, password, profileImage });
        const verificationCode = generateSixDigitCode().toString();

        // Generate the token for email validation
        const newVerificationToken = await Token.create({ user : newUser._id, token: verificationCode });

        const emailSubject = "Email Verification Code";
        const emailHtml = generateCodeVerificationHTML(verificationCode, firstName, lastName);
        await sendEmail(email, emailSubject, emailHtml);

        const accessToken = generateVerificationAccessToken(newUser, newVerificationToken._id);

        res.status(201).json({
            success: true, 
            message: `The account (${email}) have successfully registered`,
            accessToken,
            data: {
                userId : newUser._id,
                email: newUser.email
            }
        });

    } catch (error) {
        res.status(500).json({success: false, message: `Server Error`});
        console.log(error.message) // Should have an error handler
    }
}

const logIn = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        const { email, password} = req.body;
        if(!email || !password) return res.status(400).json({success: false, message: 'Missing data'});

        // Find the Email in the database
        const user = await User.findOne({email}).select('+password');

        if(!user) return res.status(404).json({success: false, message: 'The Email has not been registered yet.', errorAt: "email"});

        // Verify if the account has been verified
        if(!user.isVerified) return res.status(404).json({success: false, message: 'The Email has not been verified yet.'});
        
        // Validate if the passoword matched    
        const isMatched = await bcryptjs.compare(password, user.password);
        if(!isMatched) return res.status(404).json({success: false, message: 'Incorrect password.', errorAt: "password"});

        // Generate JWT token
        const refreshToken = generateRefreshToken(user);
        const accessToken = generateAccessToken(user);
        
        // Send the refresh token through cookie
        // to avoid access of javascript add security
        res.cookie('jwt', refreshToken, { 
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
        })

        res.status(200).json({
            success: true, 
            message: 'Success Login', 
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profileImage: user.profileImage
            },
            token: accessToken
        });

    } catch (error) {
        res.status(500).json({success: false, message: `Server Error`});
        console.log(error.message) // Should have an error handler
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({success: true, message: `Logout`});
    } catch (error) {
        res.status(500).json({success: false, message: `Server Error`});
        console.log(error.message) // Should have an error handler
    }
}

const refresh = (req, res) => {
    const cookie = req.cookies;
    if(!cookie) return res.status(401).json({success: false, message: 'Unathorized'});

    const refreshCookie = cookie.jwt;
    jwt.verify(refreshCookie, process.env.JWT_ACCESSTOKEN, async (err, decoded) => {
        if(err) return res.status(401).json({success: false, message: 'Unathorized'});
        
        const user = await User.findById(decoded._id);
        if(!user) return res.status(401).json({success: false, message: 'Unathorized'});

        const generatedRefreshToken = generateRefreshToken(user);
        const accessToken = generateAccessToken(user);

        // Update the Refresh Token
        res.cookie('jwt', generatedRefreshToken, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
        });  

        // Send a new access Token
        res.status(200).json({
            success: true, 
            message: 'Success Login', 
            data: {
                name: user.name,
                email: user.email,
                profileImage: user.profileImage
            },
            token: accessToken
        });
    });
}

const verifyEmail = async (req, res) => {
    try {
        if(!req.body) return res.status(400).json({success: false, message: 'The request has no content'});
        
        const userTokenInput = req.body.token;
        const userId = req.user._id;
        const userVerificationTokenId = req.user.verificationTokenId;
        if(!userId || !userTokenInput || !userVerificationTokenId) return res.status(400).json({success: false, message: 'Missing required data'});

        // Validate if the token for the user does exist in the DB
        const validToken = await Token.findById(userVerificationTokenId);
        if(!validToken) return res.status(400).json({success: false, message: 'Code Expired'});

        // Validate if the token from the DB is same as the users request
        if(validToken.token !== userTokenInput) return res.status(400).json({success: false, message: 'Incorrect Code'});

        // Update the user data to verified and delete the token from the
        const user = await User.findByIdAndUpdate(userId, { isVerified: true });
        await validToken.deleteOne();
        res.status(200).json({
            success : true, 
            message: `Success! ${user.firstName}, your account is now verified. Start organizing your group tasks and boosting your productivity today.`,
            data : {email : user.email}
        })
    } catch (error) {
        res.status(500).json({success: false, message: `Server Error`});
        console.log(error.message) // Should have an error handler
    }
}

const verifyEmailResend = async (req, res) => {
    const userId = req.user._id;
    const userEmail = req.user.email;
    const userVerificationTokenId = req.user.verificationTokenId;
    if(!userId || !userEmail || !userVerificationTokenId) return res.status(400).json({success: false, message: 'Missing required data'});

    // Validate if the previous token does exist in the DB
    const prevToken = await Token.findById(userVerificationTokenId);
    if(!prevToken) return res.status(400).json({success: false, message: 'Session Expired'});

    // Validate if the previous token has been sent 2 minutes ago before sending a new one
    const currentTime = new Date();
    const timeDifference = currentTime - prevToken.createdAt; // Result is in milliseconds
    const twoMinutesInMs = 2 * 60 * 1000;
    const remainingSecs = Math.ceil((twoMinutesInMs - timeDifference) / 1000);

    if(timeDifference < twoMinutesInMs) return res.status(400).json({success: false, message: `Please wait ${remainingSecs} seconds before requesting a new code.`});

    // Delete the old Token
    await prevToken.deleteOne();

    const generatedToken = generateSixDigitCode().toString();
    const newVerificationToken = await Token.create({user: userId, token: generatedToken});

    // Send the Verification Code via email
    const emailSubject = "New email Verification Code";
    const emailHtml = generateResendCodeHTML(generatedToken);
    await sendEmail(userEmail, emailSubject, emailHtml);

    const newAccessToken = generateVerificationAccessToken(req.user, newVerificationToken._id);

    res.status(200).json({success: true, message: `New Code has been sent to your email (${userEmail})`, accessToken: newAccessToken})

}

const requestResetPassword = async (req, res) => {
    const {email} = req.body;
    if(!email) return res.status(400).json({success: false, message: 'Missing Required data: email'});

    const user = await User.findOne({email});
    if(!user) return res.status(400).json({success: false, message: 'We cannot find your email'});

}

module.exports = {
    signUp,
    logIn,
    logout,
    refresh,
    verifyEmail,
    verifyEmailResend
}