const express = require('express');
const router = express.Router();

const userController = require('../userControllers/userControllers');

// Default Route
router.get('/', userController.defaultRoute);

//get all
router.get('/get-users',userController.getAll);
router.get('/get-one', userController.getUser)

// invite routes
router.post('/add-user', userController.addUser);

//update user
router.put('/update-user/:_id', userController.updateUser)

module.exports = router;