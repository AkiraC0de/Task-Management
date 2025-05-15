const Task = require('../models/Task')

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

module.exports = { createTask }