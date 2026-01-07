const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 // This is 10 minutes (in seconds)
    }
});

// This creates a TTL (Time To Live) index
// MongoDB will automatically delete this document after 15 minutes!
module.exports = mongoose.model('Token', tokenSchema);