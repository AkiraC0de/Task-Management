const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    // Verify if the accessToken exist in the request header
    const accessToken = req.cookies.accessToken;
    if(!accessToken) return res.status(401).json({success: false, message: 'You are not authorized to access this!'});

    // Validate the token
    jwt.verify(accessToken, process.env.JWT_ACCESSTOKEN, (err, user) => {
        if(err) return res.status(404).json({success: false, message: 'Invalid Token'});

        req.user = user;
        next();
    });
}

module.exports = verifyAuth;