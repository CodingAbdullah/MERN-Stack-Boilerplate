const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/userController"); // Make use of the user controller and pass in the routes

// SAMPLE ROUTE
router.get("/loginForm", auth, userController.loginFormValidation);
router.post("/signUpForm", userController.signUpFormValidation);

module.exports = router;
