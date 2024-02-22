const express = require('express');
const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send("I am Home");
// });

// router.post('/register',(req,res)=>{
//     res.send("Register");
// });

router.use('/users',require('./users'));


router.use('/courses',require('./courses'));

router.use('/api',require('./api'));

router.use('/blogs',require('./blogs'))

router.use('/ondc-seller',require('./ondcSeller'));

router.use('/udyamsathi',require('./udyamsathi'));

module.exports = router;