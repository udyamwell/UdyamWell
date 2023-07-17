const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.post('/sign-up', async (req,res)=>{
    console.log("this is req.body",req.body);

    const { 
     name,
     email,
     phoneNum,
     location,
     eName,
     enterpriseType,
     socials,
     comment,
     password} = req.body;
     try{
          let user = await User.findOne({email: email});

          if(user){
               console.log("user alredy present ");
               res.send({message: "User already registerd"})
           } else {
               const user = new User({
                  name,
                  email,
                  phoneNum,
                  location,
                  eName,
                  enterpriseType,
                  socials,
                  comment,
                  password
               });
               await user.save();
               console.log("user registered succefully");
           }
     }catch(err){
          console.log("err",err);
          return;
     }

});


// user login 

router.post('/sign-in',async (req,res)=>{
     // console.log(req.body);
     // res.send({message: "you are here"});

     try{
          let token;
          const {email,password} = req.body;
          if(!email || !password){
               return res.status(400).json({error:"Please filled the data"});
          }
 
          const userLogin = await User.findOne({email:email});

          if(userLogin){
               const isMatch =   await bcrypt.compare(password,userLogin.password);

               token =await userLogin.generateAuthToken();
               // console.log(token);


               // this part will be implimented -------------- Again -------------
               res.cookie("jwtToken", token,{
                    expires: new Date(Date.now()+25892000000),
                    httpOnly:true
               })
              // ------------------------------------------------------------------

               if(!isMatch){
                    console.log("enter valid user id");
                    return res.status(400).send("Invalid Username or Password");
               }else{
                    return res.status(200).send("password matched successfully");
               }
          }else{
               return res.status(200).send("Invalid credentials");
          }



     }catch(err){
          console.log("err",err);
          return;
     }
})



module.exports = router;