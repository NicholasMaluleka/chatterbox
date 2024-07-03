const express = require('express');
const router = express.Router();

const userController = require('../userControllers/userControllers');
const inviteController = require('../userControllers/invitesControllers');
const acceptedController = require('../userControllers/acceptedController');
const messagesController = require('../userControllers/messagesControllers')

// Default Route
router.get('/', userController.defaultRoute);

//get all
router.get('/get-users',userController.getAll);
router.get('/get-one', userController.getUser)

// invite routes
router.post('/add-user', userController.addUser);
router.post('/send-invite', inviteController.addInvite);
router.get('/get-invites', inviteController.getInvites);
router.delete('/delete-request', inviteController.deleteRequest);

//accepted routes
router.post('/accept-invite', acceptedController.addAccept);
router.get('/get-accepted', acceptedController.getAccepteds);

//messages routes
router.post('/send-message',messagesController.addMessage );
router.get('/get-messages', messagesController.getMessages);

module.exports = router;