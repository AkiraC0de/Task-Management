const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    try {
        // Verify if the accessToken exist in the request header
        const authorization = req.headers.authorization || req.headers.Authorization;
        if(!authorization) return res.status(403).json({success: false, message: 'You are not authorized to access this!'});
        
        // Verify the authorization format
        if(!authorization.startsWith('Bearer ')) return res.status(403).json({success: false, message: 'You are not authorized to access this!'});

        // Extract the token from authorization
        const token = authorization.split(' ')[1];

        // Validate the access token
        jwt.verify(token, process.env.JWT_ACCESSTOKEN, (err, user) => {
            if(err) return res.status(403).json({success: false, message: 'Invalid Token'});

            req.user = user;
            next();
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success: false, message: 'Server Error'});
    }
}

module.exports = verifyAuth;