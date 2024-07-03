const mongoose = require('mongoose')

const user = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
    username: { type: String, required: true },
    password:{type: String, required:true},
    confirmPassword: {type: String, required: true},
    status: { type: String, required: true }
})

module.exports = mongoose.model('user', user);


