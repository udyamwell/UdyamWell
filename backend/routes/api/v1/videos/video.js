const express = require('express');
const router = express.Router();
const courseVideoAPI = require('../../../../controllers/api/v1/videos_api');

router.post('/create-video/:id',courseVideoAPI.createVideo);
router.get('/fetch-video',courseVideoAPI.fetchVideo);
router.put('/update-video/:id',courseVideoAPI.updateVideo);
router.delete('/delete-video/:id',courseVideoAPI.deleteVideo);
module.exports = router;