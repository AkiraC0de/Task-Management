const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        required: true,
        type: Date,
        trim: true
    },
    status: {
        type: String,
        enum: ['in progress', 'completed', 'failed'],
        default: 'in progress',
        require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;