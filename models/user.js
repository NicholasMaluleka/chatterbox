const { type } = require('express/lib/response');
const mongoose = require('mongoose')

const user = new mongoose.Schema({
    fullName: { type: String, required: true },
    contact: {type: String, required: true},
    address: {type: String, required: true},
    otherContact: {type: String, required: false},
    status: { type: String, required: true },
    amount: { type: String, required: true },
    dateAdded : {type: Date, required: true},
    // paybackDate : {type: Date, required: true}
})

module.exports = mongoose.model('user', user);


