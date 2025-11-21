const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required:true,
        minlength:6
    },
    role:{
        type: String,
        enum: ['admin', 'manager', 'member'],
        default: 'member',
        required:true,

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;