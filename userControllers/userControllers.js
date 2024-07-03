const User = require('../models/user')
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
    //The code is structured as a callback function that takes two parameters req (request) and res 
    addUser: (req, res) => {
        let payload = { ...req.body };
   //It then uses the bcrypt library to generate a salt (bcrypt.genSalt) and hash the password from the payload (bcrypt.hash). we do this to store passwords in a database
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(payload.password, salt, async (err, hash) => {
                try {
    // Store hash in your password DB.
    //The original password in the payload is replaced with the hashed password.
                    payload['password'] = hash;
    //A new User object is created with the updated payload, and then it's saved to the database using await newUser.save()
                    const newUser = new User(payload)
                    const result = await newUser.save()
                    res.status(201).send(newUser)
                } catch (error) {
                    res.status(500).send(error)
                }
            });
        });
    },
    getAll: async (req, res) => {
        try {
            const result = await User.find(req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getUser: async (req, res) => {
        try {
            const result = await User.findOne({ username: req.params.username });
            if (!result) {
                return res.status(404).send({ message: "User not found" });
            }
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}