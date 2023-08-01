const express = require('express');
const router = express.Router();

router.use('/video',require('./video'));

module.exports = router;