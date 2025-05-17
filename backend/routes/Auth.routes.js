const express = require('express');

const authRoute = express.Router();

const { signUp, logIn, logout } = require('../controllers/Auth.controller')

// Sign Up Route
authRoute.post('/signup', signUp);

// Log In Route
authRoute.post('/login', logIn);

// Log out Route
authRoute.post('/logout', logout);

module.exports = authRoute;