const express = require('express');

const authRoute = express.Router();

const { signUp, logIn } = require('../controllers/Auth.controllers')

// Sign Up Route
authRoute.post('/signup', signUp);
authRoute.post('/login', logIn);

module.exports = authRoute;