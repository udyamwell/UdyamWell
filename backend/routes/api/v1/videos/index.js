const express = require('express');
const router = express.Router();

router.use('/',require('./video'));

module.exports = router;