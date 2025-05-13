const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        select: false
    },
    role: {
        type: String,
        enum: ['user, admin'],
        default: 'user'
    },
    profileImage: {
        type: String, 
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;