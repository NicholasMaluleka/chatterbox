const accepted = require('../models/accepted')
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
    addAccept: async (req, res) => {
        try {
            const { sender, receiver } = req.body; // Assuming you have sender and receiver fields in your request body
    
            // Inserting into the database to establish friendship
            const result = await Friendship.create({ sendTo, username });
    
            res.status(201).send(result); // Return the result indicating success
        } catch (error) {
            res.status(500).send(error); // Handle any errors
        }
    },
    getAccepteds: async (req, res) => {
        try {
            const result = await accepted.find(req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getAccept: async (req, res) => {
        try {
            const result = await Invite.findOne({ username: req.params.username });
            if (!result) {
                return res.status(404).send({ message: "Invite not found" });
            }
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}