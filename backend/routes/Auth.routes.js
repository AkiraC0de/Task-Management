const express = require('express');

const authRoute = express.Router();

const { signUp, logIn, logout, refresh } = require('../controllers/Auth.controller')

// Sign Up Route
authRoute.post('/signup', signUp);

// Log In Route
authRoute.post('/login', logIn);

// Log out Route
authRoute.post('/logout', logout);

// Log out Route
authRoute.get('/refresh', refresh);

module.exports = authRoute;