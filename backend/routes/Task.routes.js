const express = require('express');

const taskRoute = express.Router();

// Middlewares
const verifyAuth = require('../middlewares/verifyAuth')

// Controllers
const { createTask, updateTask } = require('../controllers/Task.controller')

// Create Task Route
taskRoute.post('/', verifyAuth, createTask);

// Update Task Route
taskRoute.put('/:taskId', verifyAuth, updateTask);

module.exports = taskRoute;