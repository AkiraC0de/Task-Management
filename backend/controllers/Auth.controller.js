const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const  { generateAccessToken, generateRefreshToken} = require('../utils/tokenJWT')


const signUp = async (req, res) => {
    try {
        // Verify if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        // Verify the datas if complete
        const { name, email, password, profileImage } = req.body;
        if(!email || !password || !name) return res.status(400).json({success: false, message: 'Missing data'});

        // Validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) return res.status(400).json({success: false, message: `Invalid email format: ${email}`});


        // Verify if the email has not been registered
        const isRegistered = await User.findOne({email});
        if(isRegistered) return res.status(400).json({success: false, message: 'The email has already been registred '});

        await User.create({ name, email, password, profileImage });
        res.status(201).json({success: true, message: `The account (${email}) have successfully registerd`});

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
        if(!user) return res.status(404).json({success: false, message: 'The Email has not been registered yet'});
   
        // Validate if the passoword matched    
        const isMatched = await bcryptjs.compare(password, user.password);
        if(!isMatched) return res.status(404).json({success: false, message: 'Incorrect passowrd'});

        // Generate JWT token
        const refreshToken = generateRefreshToken(user);
        const accessToken = generateAccessToken(user);
        
        // Send the access token through cookie
        // to avoid access of javascript add security
        res.cookie('jwt', refreshToken, { 
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
        })

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

module.exports = {
    signUp,
    logIn,
    logout,
    refresh
}