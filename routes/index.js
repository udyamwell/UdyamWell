const express = require('express');
const router = express.Router();

const { createNewBlog } = require("../controllers/blogs")

// router.get('/',(req,res)=>{
//     res.send("I am Home");
// });

// router.post('/register',(req,res)=>{
//     res.send("Register");
// });

router.use('/users',require('./users'));


router.use('/courses',require('./courses'));

router.use('/api',require('./api'));

router.use('/blogs',require("./blogs"));

module.exports = router;