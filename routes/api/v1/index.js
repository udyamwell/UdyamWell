const express = require('express');
const router = express.Router();
const status = require('../../../controllers/api/v1/course_status');

router.post("/",status.updateStatus);
router.post("/getStatus",status.getStatus);
router.use('/courses',require('./courses'));


module.exports = router;