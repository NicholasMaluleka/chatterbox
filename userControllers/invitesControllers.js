const Invite = require('../models/invite')
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
    addInvite: (req, res) => {
        let payload = { ...req.body };
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(payload.password, salt, async (err, hash) => {
                try {
                    payload['password'] = hash;
                    const newInvite = new Invite(payload)
                    const result = await newInvite.save()
                    res.status(201).send(newInvite)
                } catch (error) {
                    res.status(500).send(error)
                }
            });
        });
    },
    getInvites: async (req, res) => {
        try {
            const result = await Invite.find(req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getInvite: async (req, res) => {
        try {
            const result = await Invite.findOne({ username: req.params.username });
            if (!result) {
                return res.status(404).send({ message: "Invite not found" });
            }
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteRequest: async (req, res) => {
        const query = { ...req.params }
        try {
            const result = await Invite.deleteOne(query);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
}