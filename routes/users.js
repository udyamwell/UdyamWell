const express = require("express");
const router = express.Router();
const Authenticate = require("../config/jwt_auth.js");
// const authenticate = require('../config/jwt_auth');

const usersController = require("../controllers/users_controlles.js");
// USER SIGN UP
router.post("/sign-up", usersController.signUp);
router.post("/sendOtp", usersController.sendOtp);

// USER SIGN IN
router.post("/sign-in", usersController.signIn);
//user route for profile update
router.put("/update", Authenticate.userAuth, usersController.updateUser);
router.put("/forgot-password", usersController.forgotPassword);
router.put("/change-password", usersController.changePassword);
// router.get("/verify", usersController.verifyMail);
router.get("/", Authenticate.superAdminAuth, usersController.getAllUsers);
router.put(
  "/update-admin/:_id",
  Authenticate.superAdminAuth,
  usersController.updateAdmin
);
router.delete("/:_id", Authenticate.superAdminAuth, usersController.deleteUser);

// ROUTER FOR COURSES PAGE
router.get("/courses", usersController.courses); // ,authenticate

module.exports = router;
