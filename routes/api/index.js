const express = require('express');
const router = express.Router();
const newsLetter = require('../../controllers/newsLetter_email');


router.use('/v1',require('./v1'));

router.post('/newsletter',newsLetter);


module.exports = router;