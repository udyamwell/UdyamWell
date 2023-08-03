const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNum: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    eName: {
      type: String,
      required: true,
    },
    enterpriseType: {
      type: String,
      required: true,
      enum: ["individual", "SHG", "FPO", "Pvt", "OPC", "LLP"],
    },
    socials: {
      type: String,
      required: true,
      enum: ["Whatsapp", "socailMedia", "wordOfMouth", "udyamwell"],
    },
    comment: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin:{
      type:Boolean,
      default:false,
    },
    isVerfied:{
      type:Boolean,
      default:false,
    }
  },
  // {
  //   timestamps: true,
  // }
);

// TO HASH THE PASSWORD

userschema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 12);
      // this.cpassword = await bcrypt.hash(this.password, 12); // You might not need this line.
    } catch (err) {
      return next(err);
    }
  }
  next();
});

// we are generating token



const Users = mongoose.model("Users", userschema);

module.exports = Users;
