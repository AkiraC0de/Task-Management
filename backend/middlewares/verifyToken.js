const crypto = require('crypto');
const Token = require('../models/Token');

const verifyToken = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization || req.headers.Authorization;
    if(!authorization) return res.status(403).json({success: false, message: 'You are not authorized to access this!'});
    
    if(!authorization.startsWith('Bearer ')) return res.status(403).json({success: false, message: 'You are not authorized to access this!'});

    // Extract the token from authorization
    const token = authorization.split(' ')[1];

    const hashedToken = crypto
                          .createHash('sha256')
                          .update(token)
                          .digest('hex');

    const validToken = await Token.findOne({token : hashedToken});
    if(!validToken) return res.status(403).json({success: false, message: 'Invalid or Expired Token'});

    req.user = req.user || {};
    req.user.token = validToken;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({success: false, message: 'Server Error'});
  }
}

module.exports = verifyToken;