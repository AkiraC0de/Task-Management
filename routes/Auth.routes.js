const express = require('express');

const authRoute = express.Router();

const { signUp } = require('../controllers/Auth.controllers')

// Sign Up Route
authRoute.post('/signup', signUp);

module.exports = authRoute;