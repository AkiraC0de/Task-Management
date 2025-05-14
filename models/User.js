const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
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
        enum: ['user', 'admin'],
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

// Security feature: 
// Middleware to hash the password
// before saving to the database
userSchema.pre('save', async function(next) {
    const password = String(this.password)
    this.password = await bcryptjs.hash(password, 10);
    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User;