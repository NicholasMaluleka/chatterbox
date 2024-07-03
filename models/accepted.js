const mongoose = require('mongoose')

const accepted = new mongoose.Schema({
    username: { type: String, required: true },
    sendTo: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = mongoose.model('accepted', accepted);


