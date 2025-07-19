const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  defaultRoute: async (req, res) => {
    try {
      res.send('Welcome to NODE.JS');
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addUser: (req, res) => {
    let payload = { ...req.body };
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(payload.password, salt, async (err, hash) => {
        try {
          payload['password'] = hash;
          const newUser = new User(payload);
          const result = await newUser.save();
          res.status(201).send(newUser);
        } catch (error) {
          res.status(500).send(error);
        }
      });
    });
  },

  getAll: async (req, res) => {
    try {
      const result = await User.find(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getUser: async (req, res) => {
    try {
      const result = await User.findOne({ username: req.params.username });
      if (!result) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // ✅ NEW: Update user by username
  updateUser: async (req, res) => {
    try {
      const { _id } = req.params;
      const updateData = { ...req.body };

      // If password is being updated, hash it again
      if (updateData.password) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(updateData.password, salt);
        updateData.password = hashedPassword;
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id },
        { $set: updateData },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).send({ message: 'User not found' });
      }

      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
