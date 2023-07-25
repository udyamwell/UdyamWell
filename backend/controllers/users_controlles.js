const Users = require("../models/users");
const dotenv =  require("dotenv");
const bcrypt = require("bcryptjs");
const generateToken = require("../config/generateToken");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
//for send mail
dotenv.config();

const sendVerifyEmail = asyncHandler(async (name, email, user_id) => {
  console.log("name",name)
  try {
   const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      requireTLS:true,
      auth:{
        user:process.env.Email,
        pass:process.env.Email_Password
      }
    });
    const mailOptions = {
      from: 'vanshikabansal73@gmail.com',
      to:email,
      subject:'Email Verification',
      html:'<p>Hii '+name+', Please click here to <a href="http://localhost:9000/users/verify?id='+user_id+'">Verify </a? Your mail. </p>'
    }
    transporter.sendMail(mailOptions,function(error,info){
      if(error){console.log(error);}
      else{console.log("Email sent",info.response)}
    })

  } catch (error) {
    console.log("verify",error.message);
  }
}); 
// SETTING UP THE SIGN UP FUNCTIONALITY
 
module.exports.signUp = asyncHandler(async (req, res, next) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      throw new Error("Email already registered");
    } else {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const { _id, name, email, phoneNum, location, eName, enterpriseType,isVerfied,isAdmin  } =
        await Users.create(req.body);
      const token = generateToken(_id);
      sendVerifyEmail(name, email, _id);
      console.log("roken",token)
      res
        .status(200)
        .send({
          token: token,
          user: { _id, name, email, phoneNum, location, eName, enterpriseType,isVerfied,isAdmin  },
        });
    }
  } catch (err) {
    next(err);
  }
});

module.exports.verifyMail = async(req,res)=>{
  try {
    const updateInfo = await Users.updateOne({_id:req.query.id},{$set:{isVerfied :true}});
    console.log("ingo updated",updateInfo);
    res.render("email-verified.ejs");
  } catch (error) {
    console.log(error)
  }
}

module.exports.signIn = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await Users.findOne({ email: email });
    if (!result) {
      throw new Error("Email not found");
    }
    let check = await bcrypt.compare(password, result?.password);
    if (!check) throw new Error("Incorrect Password");
    else {
      const { _id, name, email, phoneNum, location, eName, enterpriseType,isVerfied,isAdmin } =
        result;
      res.status(200).send({
        user: { _id, name, email, phoneNum, location, eName, enterpriseType,isVerfied,isAdmin  },
        token: generateToken(result._id),
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports.updateUser = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = await req.user;
    console.log("id in uoadre",_id);
    const data = req.body;
    req.body.password = await bcrypt.hash(req.body.password, 10);
    console.log("body",req.body)
    const { name, email, phoneNum, location, eName, enterpriseType } =
      await Users.findByIdAndUpdate({ _id }, { ...data }, { new: true });
    res
      .status(200)
      .send({
        token: generateToken(_id),
        user: { _id, name, email, phoneNum, enterpriseType, location, eName },
      });
  } catch (error) {
    next(error);
  }
});

module.exports.courses = function (req, res) {
  console.log("Here are your courses");
  // return res.send("Here are your courses");
  return res.send(req.rootUser);
};
