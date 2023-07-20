const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');



// SETTING UP THE SIGN UP FUNCTIONALITY 

module.exports.signUp = async function(req,res){
     //    console.log("this is req.body",req.body);
    
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
                   res.staus(409).send({message: "User already registerd"});
               } else {
                  token =await userLogin.generateAuthToken();
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
                   res.status(201).send({token:token,user:user});
               }
         }catch(err){
              console.log("err",err);
              return;
         }
}

module.exports.signIn = async function(req,res,next){
        console.log(req.body);
        try{
             let token;
             const {email,password} = req.body;
             if(!email || password===""){
                  return res.status(400).json({error:"Please filled the data"});
             }
             const userLogin = await User.findOne({email:email});
             if(!userLogin){
               res.status(201).send({message: "Email not found"})}
            const isMatch =   await bcrypt.compare(password,userLogin.password);
                  if(!isMatch){   
                       return res.status(400).send({message:"Incorrect Password"});
                    }else{
                       token =await userLogin.generateAuthToken();
                       console.log(token);
                       res.cookie("jwttoken", token,{
                            expires: new Date(Date.now()+25892000000),
                            httpOnly:true
                         })
                    // console.log('User Loged in successfully');
                    return res.status(200).send({token:token,user:userLogin});
                  }
               // return res.status(401).send({error:"Email not found"});
               // throw new Error("Invalid Email");
               //    return res.status(200).send("Invalid credentials");
   
        }catch(err){
          next(err)
          // console.log("err",err);
          // return;
          //    return res.staus(400).send("Something Went Wrong")
        }
}

module.exports.courses = function(req,res){
    console.log('Here are your courses');
    // return res.send("Here are your courses");
    return res.send(req.rootUser)
}