const express = require('express');

const authRoute = express.Router();

const { signUp, logIn } = require('../controllers/Auth.controller')

// Sign Up Route
authRoute.post('/signup', signUp);

// Log In Route
authRoute.post('/login', logIn);

module.exports = authRoute;