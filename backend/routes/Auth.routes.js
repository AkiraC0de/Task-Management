const express = require('express');

const authRoute = express.Router();

const { signUp, logIn, logout, refresh, verifyEmail, verifyEmailResend, requestResetPassword } = require('../controllers/Auth.controller')
const verifyAuth = require('../middlewares/verifyAuth')

// Sign Up Route
authRoute.post('/signup', signUp);

// Log In Route
authRoute.post('/login', logIn);

// Log out Route
authRoute.post('/logout', logout);

// Log out Route
authRoute.get('/refresh', refresh);

// Email Verification Route
authRoute.post('/verify-email', verifyAuth, verifyEmail);

// Email Verificaton Resend Code Route
authRoute.get('/verify-email-resend', verifyAuth, verifyEmailResend);

// Email Verificaton Resend Code Route
authRoute.post('/request-reset-password', requestResetPassword);

module.exports = authRoute;