const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');

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

        const otp = generateSixDigitCode().toString();
        const token = crypto.randomBytes(12).toString('hex');
        const hashedToken = crypto
                            .createHash('sha256')
                            .update(token)
                            .digest('hex');

        // Generate the token for email validation
        await Token.create({ user : newUser._id, token: hashedToken, otp, type: "email_verify" });

        const emailSubject = "Email Verification Code";
        const emailHtml = generateCodeVerificationHTML(otp, firstName, lastName);
        await sendEmail(email, emailSubject, emailHtml);

        res.status(201).json({
            success: true, 
            message: `The account (${email}) have successfully registered`,
            token,
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
        const userOtpInput = req.body?.otp;
        const token = req.user.token;
        const userId = token.user;
        if(!token || !userOtpInput) return res.status(400).json({success: false, message: 'Missing required data'});

        // Validate if the token from the DB is same as the users request
        if(token.otp !== userOtpInput) return res.status(400).json({success: false, message: 'Incorrect Code'});

        // Update the user data to verified and delete the token from the
        const user = await User.findByIdAndUpdate(userId, { isVerified: true });
        await token.deleteOne();
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
    const prevToken = req.user.token;
    const userId = prevToken.user;
    if(!userId || !prevToken) return res.status(400).json({success: false, message: 'Missing required data'});
;
    // Validate if the previous token has been sent 2 minutes ago before sending a new one
    // NEEDS TO BE UPDATED TO RATE LIMITER
    const currentTime = new Date();
    const timeDifference = currentTime - prevToken.createdAt; // Result is in milliseconds
    const twoMinutesInMs = 2 * 60 * 1000;
    const remainingSecs = Math.ceil((twoMinutesInMs - timeDifference) / 1000);

    if(timeDifference < twoMinutesInMs) return res.status(400).json({success: false, message: `Please wait ${remainingSecs} seconds before requesting a new code.`});

    // Delete the old Token
    await prevToken.deleteOne();

    const newVerificationCode = generateSixDigitCode().toString();
    const newToken = crypto.randomBytes(12).toString('hex');
    const hashedToken = crypto
                        .createHash('sha256')
                        .update(newToken)
                        .digest('hex');
    
    await Token.create({user: userId, token: hashedToken, otp : newVerificationCode, type : 'email_verify'});

    // Send the Verification Code via email
    const emailSubject = "New email Verification Code";
    const emailHtml = generateResendCodeHTML(generatedToken);
    await sendEmail(userEmail, emailSubject, emailHtml);

    res.status(200).json({success: true, message: `New Code has been sent to your email (${userEmail})`, token: newToken})

}

const requestResetPassword = async (req, res) => {
    const userEmail = req.body?.email;
    if(!userEmail) return res.status(400).json({success: false, message: 'Missing Required data: email'});

    const user = await User.findOne({email : userEmail});
    if(!user) return res.status(400).json({success: false, message: 'We cannot find your email'});

    const accessToken = generateAccessToken(user);
    await Token.create({user: user_id, token: accessToken});

    const resetPasswordURL = `${process.env.FRONTEND_ORIGIN_URL}/reset-password/${accessToken}`;

    const emailSubject = "Reset Password Verification";
    const emailHtml = generateForgotPasswordEmailHTML(resetPasswordURL, user.firstName);
    await sendEmail(userEmail, emailSubject, emailHtml);

    res.status(200).json({success: true, message: `Reset password link has been sent to your email (${userEmail})`})
}

// NEEDS REFACTORING
const verifyToken = async (req, res) => {
    const userId = req.user?._id;
    if(!userId) res.status(401).json({success: false, message: "Invalid Session"});

    const validToken = await Token.findOne({user: userId});
    if(!validToken) res.status(401).json({success: false, message: "Invalid or Expired Access"});

    res.status(200).json({success: true, message: "Access Granted"});
}

module.exports = {
    signUp,
    logIn,
    logout,
    refresh,
    verifyEmail,
    verifyEmailResend,
    requestResetPassword,
}