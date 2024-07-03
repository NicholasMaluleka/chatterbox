const mongoose = require('mongoose')

const messages = new mongoose.Schema({
    text: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true }
})

module.exports = mongoose.model('messages', messages);