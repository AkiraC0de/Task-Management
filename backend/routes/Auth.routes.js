const express = require('express');

const authRoute = express.Router();

const { 
  signUp, 
  logIn, 
  logout, 
  refresh, 
  verifyEmail, 
  verifyEmailResend, 
  requestResetPassword,
} = require('../controllers/Auth.controller')
const verifyAuth = require('../middlewares/verifyAuth');
const verifyToken = require('../middlewares/verifyToken');

// Sign Up Route
authRoute.post('/signup', signUp);

// Log In Route
authRoute.post('/login', logIn);

// Log out Route
authRoute.post('/logout', logout);

// Log out Route
authRoute.get('/refresh', refresh);

// Email Verification Route
authRoute.post('/verify-email', verifyToken, verifyEmail);

// Email Verificaton Resend Code Route
authRoute.get('/verify-email-resend', verifyToken, verifyEmailResend);

// request reset password Route
authRoute.post('/request-reset-password', requestResetPassword);

// Verify Reset Password Token Route
// authRoute.get('/reset-password', verifyAuth, verifyTokenParams);

module.exports = authRoute;