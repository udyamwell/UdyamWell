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

module.exports = router;