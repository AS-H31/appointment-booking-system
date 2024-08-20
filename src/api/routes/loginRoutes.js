const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/loginController.js");
const { registerNewUser } = require("../controllers/registerController.j.js");
const verifyJwt = require("../middleware/verfiyJWT.js");
const ROLES_LIST = require("../config/roles_list");
const verifyRole = require("../middleware/verifyRole");

router.post(
  "/register",
  verifyJwt,
  verifyRole(ROLES_LIST.ADMIN_ROLE),
  registerNewUser,
);

router.post(
  "/login",
  loginUser,
  verifyRole(ROLES_LIST.ADMIN_ROLE, ROLES_LIST.USER_ROLE),
);

module.exports = router;
