// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const express = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/generateToken')
const asyncHandler= require('express-async-handler');

// SETTING UP THE SIGN UP FUNCTIONALITY 

module.exports.signUp =  asyncHandler(async (req, res,next) => {
        console.log("this is req.body",req.body);
         try{
              let user = await User.findOne({email:req.body.email});
              console.log("user found",user);
              if(user){
                   console.log("user alredy present ");
                   throw new Error("Email already registered")
               //     res.status(409).send({message: "User already registerd"});
               } else {
                    const {_id,name,email,phoneNum,location,eName,enterpriseType} = await User.create(req.body);
                   const token = generateToken(_id);
               //     const user = new User({
               //        name,
               //        email,
               //        phoneNum,
               //        location,
               //        eName,
               //        enterpriseType,
               //        socials,
               //        comment,
               //        password
               //     });
               //     await user.save();
                   console.log("user registered succefully");
                   console.log("token",token);
                   res.status(200).send({token:token,user:{_id,name,email,phoneNum,location,eName,enterpriseType}});
               }
         }catch(err){
          console.log("error om catch",err)
          next(err)
          //     console.log("err",err);
          //     return;
         }
})

module.exports.signIn = asyncHandler(async (req, res, next) => {
        console.log(req.body);
        try {
          const { email, password } = req.body;
          const result = await User.findOne({email:email})
          if (!result) {throw new Error("Email not found")}
          console.log("result",result);
          let check = await bcrypt.compare(password, result?.password);
          console.log("check",check);
          // if (!check) res.status(401).send({message: "incorrect Password"});
          if (!check) throw new Error("Incorrect Password")
          else{
            const {_id,name,email,phoneNum,location,eName,enterpriseType} = result;
            res.status(200).send({
              user:{_id,name,email,phoneNum,location,eName,enterpriseType},
              token: generateToken(result._id),
            })};
        } catch (error) {
          next(error);
        }
     //    try{
     //         const {email,password} = req.body;
     //         if(!email || password===""){
     //              return res.status(400).json({error:"Please filled the data"});
     //         }
     //         const userLogin = await User.findOne({email:email});
     //         console.log("user",userLogin)
     //         if(!userLogin) throw new Error("email is invalid");
     //        const isMatch =   await bcrypt.compare(password,userLogin.password);
     //              if(!isMatch){   
     //                   return res.status(400).json({message:"Incorrect Password"});
     //                }else{
     //                   const  token =  generateToken(userLogin._id);
     //                   console.log("tokkeee",token);
     //                // console.log('User Loged in successfully');
     //                return res.status(200).send({token:token,user:userLogin});
     //              }
     //           // return res.status(401).send({error:"Email not found"});
     //           // throw new Error("Invalid Email");
     //           //    return res.status(200).send("Invalid credentials");
   
     //    }catch(err){
     //      next(err)
     //      // console.log("err",err);
     //      // return;
     //      //    return res.staus(400).send("Something Went Wrong")
     //    }
})

module.exports.courses = function(req,res){
    console.log('Here are your courses');
    // return res.send("Here are your courses");
    return res.send(req.rootUser)
}