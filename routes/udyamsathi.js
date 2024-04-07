const express = require('express');
const router = express.Router();

const Udyamsathi = require("../controllers/udyamsathi");

router.get('/get-udyamsathi',Udyamsathi.getUdyamsathi);

router.post('/add-udyamsathi',Udyamsathi.creatUdyamsathi);

module.exports = router;