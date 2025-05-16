const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        // Verify if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        // Extract request body from what only field needed
        const { title, description, deadline } = req.body;

        // Verify if there are missing field
        if(!title || !description || !deadline || !req.user._id){
            return res.status(400).json({success: false, message: 'Incomplete data'})
        }

        const newTask = await Task.create({
            title, 
            description, 
            deadline,
            createdBy: req.user._id 
        });

        res.status(200).json({success: true, message: 'New Task has been created'})

    } catch (error) {
        console.log(error.message);
    }
} 

const updateTask = async (req, res) => {
    const user = req.user
    const taskId = req.params.id;
    const { title, description, deadline, status } = req.body;

    // Validate the ID paramter if it has content
    if(!taskId) res.status(400).json({success: false, message: 'Undefined Task ID parameter'});

    const task = await Task.findById(taskId);
    if(!task) res.status(400).json({success: false, message: `Task (${taskId} does not exist`});

    // Verify if the request sender was the owner of the Task
    const isOwner = String(task.createdBy) === String(user._id);
    const isAdmin = String(task.createdBy) === String(user._id);

    if(!isOwner && isAdmin || !isAdmin) res.status(401).json({success: false, message: 'You are not authorized to update this task'});

    if(title) task.title = title;
    if(description) task.description = description;
    if(deadline) task.deadline = deadline;
    if(status) task.status = status;

    await task.save();
}

module.exports = { createTask, updateTask }