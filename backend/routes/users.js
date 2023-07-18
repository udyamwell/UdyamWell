const express = require('express');
const router = express.Router();


const usersController = require('../controllers/users_controlles');

// USER SIGN UP
router.post('/sign-up',usersController.signUp);

// USER SIGN IN 
router.post('/sign-in',usersController.signIn);

module.exports = router;