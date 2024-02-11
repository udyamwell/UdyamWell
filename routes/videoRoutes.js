const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const upload = require("../middleware/uploadMiddleware");

// Define route for uploading videos
router.post("/upload", upload.array("videos"), videoController.uploadVideos);

module.exports = router;
