const express = require('express');
const router = express.Router();

const ONDCSeller = require("../controllers/ondcSeller");

router.get('/get-seller', ONDCSeller.getSellers);

router.post('/add-seller', ONDCSeller.addSellers);

module.exports = router;