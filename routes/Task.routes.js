const express = require('express');

const taskRoute = express.Router();

// Middlewares
const verifyAuth = require('../middlewares/verifyAuth')

// Controllers
const { createTask } = require('../controllers/Task.controller')

// Create Task Route
taskRoute.post('/', verifyAuth, createTask)

module.exports = taskRoute;