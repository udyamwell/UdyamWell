const express = require('express');
const router = express.Router();
const courseAPI = require('../../../controllers/api/v1/courses_api');


router.post('/lecture-data',courseAPI.courseData);
router.get('/fetch-lecture-data',courseAPI.fetchData);
router.delete('/delete-lecture-data/:id',courseAPI.deleteData);
router.put('/update-lecture-data/:id',courseAPI.updateData);

router.use('/videos',require('./videos'));

module.exports = router;