const mongoose = require('mongoose')

const invite = new mongoose.Schema({
    username: { type: String, required: true },
    sendTo: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = mongoose.model('invite', invite);


