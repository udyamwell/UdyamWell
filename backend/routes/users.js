const express = require('express');
const router = express.Router();
const authenticate = require('../config/jwt_auth');

const usersController = require('../controllers/users_controlles');

// USER SIGN UP
router.post('/sign-up',usersController.signUp);

// USER SIGN IN 
router.post('/sign-in',usersController.signIn);

// ROUTER FOR COURSES PAGE 
router.get('/courses',authenticate,usersController.courses);  //

module.exports = router;