
const User = require('../models/User');
const Token = require('../models/Token');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');

const {
  generateAccessToken,
  generateRefreshToken
} = require('../utils/tokenJWT');

const {
  generateSixDigitCode
} = require('../utils/utils');

const {
  generateCodeVerificationHTML,
  generateResendCodeHTML,
  generateForgotPasswordEmailHTML
} = require('../utils/emailHtml');

const { sendEmail } = require('../utils/mailer');

const registerUser = async (payload) => {
  const { firstName, lastName, email, password } = payload;

  if (!firstName || !lastName || !email || !password) {
    throw { status: 400, message: 'Missing data' };
  }

  const existingUser = await User.findOne({email});

  if(existingUser?.isVerified){
    throw { status: 400, field: 'email', message: 'Email Already Registered'};
  }

  if (existingUser && !existingUser.isVerified) {
    await Promise.all([
      Token.deleteOne({ user: existingUser._id }),
      existingUser.deleteOne()
    ]);
  }

  const user = await User.create({
    firstName, 
    lastName, 
    email, 
    password, 
  });

  const otp = generateSixDigitCode().toString();
  const rawToken = crypto.randomBytes(12).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');

  await Token.create({
    user: user._id,
    token: hashedToken,
    otp,
    type: 'email_verify'
  })

  const emailHtml = generateCodeVerificationHTML(
    otp,
    firstName,
    lastName
  );

  await sendEmail(email, "Email Verification Code", emailHtml);

  return {
      message: `The account (${email}) have successfully registered`,
      token : rawToken,
      user: {
          email: user.email
      }
  };
}

const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw { status: 400, message: 'Missing data' };
  }

  const user = await User.findOne({email}).select('+password');

  if(!user.isVerified) {
    throw { status: 404, field: 'email', message: 'The Email has not been verified yet.' }
  }

  const isMatched = await bcryptjs.compare(password, user.password);
  if (!isMatched) {
    throw { status: 401, message: 'Incorrect password' };
  }

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }
  };
}

module.exports = {
  registerUser,
  loginUser
}