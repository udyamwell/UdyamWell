const express = require('express');
const router = express.Router();
// const authenticate = require('../config/jwt_auth');

const courseController = require('../controllers/course_controller');


router.post('/lecture-data',courseController.lectureData); //,authenticate ==> this part will be implimented

module.exports = router;