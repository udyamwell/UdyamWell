const jwt = require("jsonwebtoken");
const dotenv =  require("dotenv");
const Users = require("../models/users.js");
const expressAsyncHandler = require("express-async-handler");

dotenv.config();

module.exports.userAuth = expressAsyncHandler(async (req, res, next) => {
    console.log("req.headers",req.headers);
  let token = req.headers.authorization;
  console.log("users token in auth",token);
  if (!token) throw new Error("no token found");
  let { id } = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
  console.log("users id in auth",id);
  if (!id) throw new Error("invlid token");

  const user = await Users.findOne({ _id: id });
  req.user = { ...user, _id: id };
  next();
});

module.exports.adminAuth = expressAsyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) throw new Error("no token found");
  let { id } = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
  if (!id) throw new Error("invlid token");
  const { isAdmin } = await Users.findOne({ _id: id });
  if (!isAdmin) throw new Error("you not authorized");
  next();
});


module.exports.superAdminAuth = expressAsyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) throw new Error("no token found");
  let { id } = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
  if (!id) throw new Error("invlid token");
  const { isSuperAdmin } = await Users.findOne({ _id: id });
  if (!isSuperAdmin) throw new Error("you not authorized");
  next();
});