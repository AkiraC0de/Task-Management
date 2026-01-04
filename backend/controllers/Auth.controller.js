const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const  { generateAccessToken, generateRefreshToken, generateVerificationAccessToken} = require('../utils/tokenJWT');
const { generateSixDigitCode } = require('../utils/utils');

const signUp = async (req, res) => {
    try {
        // Verify if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        // Verify the datas if complete
        const { firstName, lastName, email, password, profileImage } = req.body;
        if(!email || !password || !firstName || !lastName) return res.status(400).json({success: false, message: 'Missing data', reqBody: req.body});

        // Validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) return res.status(400).json({success: false, message: `Invalid email format: ${email}`, errorAt: 'email'});


        // Verify if the email has not been registered
        const isRegistered = await User.findOne({email});
        if(isRegistered) return res.status(400).json({success: false  , message: 'The email has already been registred' , errorAt: 'email'});

        // Create the unverified account
        const newUser = await User.create({firstName, lastName, email, password, profileImage });
        const code = generateSixDigitCode();

        // Generate the token for email validation
        await Token.create({ userId : newUser._id, token: code.toString() })

        // Generate an Access token for verification
        const accessToken = generateVerificationAccessToken(newUser)

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
        // Validate if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        // Extact the only field needed in req.body
        const { email, password} = req.body;

        // Verify the datas if complete
        if(!email || !password) return res.status(400).json({success: false, message: 'Missing data'});

        // Find the Email in the database
        const user = await User.findOne({email}).select('+password');

        // Verify if the email does exist in the database
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
        // Validate if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'The request has no content'});

        const { token } = req.body;
        const userId = req.user._id

        // Validate if there are missing data
        if(!userId || !token) return res.status(400).json({success: false, message: 'Missing required data'});

        const validToken = await Token.findOne({userId});

        // Validate if the token for the user does exist in the DB
        if(!validToken) return res.status(400).json({success: false, message: 'Code Expired'});

        // Validate if the token from the DB is same as the users request
        if(validToken.token !== token) return res.status(400).json({success: false, message: 'Incorrect Code'});

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
    // Validate if the userId Exist 
    const userId = req.user._id
    if(!userId) return res.status(400).json({success: false, message: 'Missing user ID'});

    // Validate if the previous token does exist in the DB
    const prevToken = await Token.findOne({userId});
    if(!prevToken) return res.status(400).json({success: false, message: 'Session Expired'});

    const currentTime = new Date();
    const timeDifference = currentTime - prevToken.createdAt; // Result is in milliseconds
    const twoMinutesInMs = 2 * 60 * 1000;

    // Validate if the previous token has been sent 2 minutes ago before sending a new one
    const remainingSecs = Math.ceil((twoMinutesInMs - timeDifference) / 1000);
    if(timeDifference < twoMinutesInMs) return res.status(400).json({success: false, message: `Please wait ${remainingSecs} seconds before requesting a new code.`});

    // Delete the old Token
    await prevToken.deleteOne();

    const generatedToken = generateSixDigitCode().toString()
    const newToken = await Token.create({userId, token: generatedToken});

    // SHOULD HAVE AN EMAIL SENDER

    // THIS REQUIRES the email to be also sent within the message
    res.status(200).json({success: true, message: 'New Code has been sent to your email'})

}

module.exports = {
    signUp,
    logIn,
    logout,
    refresh,
    verifyEmail,
    verifyEmailResend
}