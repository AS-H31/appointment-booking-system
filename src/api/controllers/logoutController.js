const pool = require("../database/db");
const db = require("../models/index");
const bcrypt = require("bcryptjs");

const logoutUser = (req, res) => {
  // on client, also delete the access token
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content

  // mostly relevent for refresh token
};

module.exports = {
  logoutUser,
};
