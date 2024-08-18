const express = require("express");
const router = express.Router();
const { signInUser, signUpUser } = require("../controllers/loginController.js");

router.post("/signup", signUpUser);

router.post("/login", signInUser);

module.exports = router;
