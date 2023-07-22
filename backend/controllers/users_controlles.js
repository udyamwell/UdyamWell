// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const express = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const generateToken = require('../config/generateToken')
const asyncHandler= require('express-async-handler');

// SETTING UP THE SIGN UP FUNCTIONALITY 

module.exports.signUp =  asyncHandler(async (req, res,next) => {
         try{
              let user = await User.findOne({email:req.body.email});
              if(user){
                   throw new Error("Email already registered")
               } else {
                    const {_id,name,email,phoneNum,location,eName,enterpriseType} = await User.create(req.body);
                   const token = generateToken(_id);
                   res.status(200).send({token:token,user:{_id,name,email,phoneNum,location,eName,enterpriseType}});
               }
         }catch(err){
          console.log("error om catch",err)
          next(err)
         }
})

module.exports.signIn = asyncHandler(async (req, res, next) => {
        try {
          const { email, password } = req.body;
          const result = await User.findOne({email:email})
          if (!result) {throw new Error("Email not found")}
          let check = await bcrypt.compare(password, result?.password);
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
})

module.exports.updateUser = asyncHandler(async (req, res, next) => { 
    try {
      const { _id } =await req.body;
      const data = req.body;
      const { name,email,phoneNum,location,eName,enterpriseType } = await User.findByIdAndUpdate(
        { _id },
        { ...data },
        { new: true }
      );
      res.status(200).send({ token: generateToken(_id),user:{ _id,name, email,phoneNum,enterpriseType,location,eName} });
    } catch (error) {
      next(error);
    }
})



module.exports.courses = function(req,res){
    console.log('Here are your courses');
    // return res.send("Here are your courses");
    return res.send(req.rootUser)
}