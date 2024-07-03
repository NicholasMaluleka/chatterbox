const messages = require('../models/messages')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to NODE.JS');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addMessage: async (req, res) => {
        try {
            const payload = req.body;
            const newMessage = new messages(payload);
            const result = await newMessage.save();
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getMessages: async (req, res) => {
        try {
            const result = await messages.find(req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}