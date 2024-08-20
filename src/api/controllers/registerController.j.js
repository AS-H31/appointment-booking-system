const pool = require("../database/db");
const db = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  const {
    userId,
    name,
    surname,
    phone_number,
    email,
    confirmation_code,
    role,
  } = req.body;
  // Check if the email exists
  const userExistsByEmail = await db.user.findOne({
    where: { email },
  });
  if (userExistsByEmail) {
    return res.status(409).send("Email is already associated with an account");
  }
  try {
    const hashedConfirmationCode = await bcrypt.hash(confirmation_code, 10);
    await db.user.create({
      name,
      surname,
      email,
      phone_number,
      userId,
      confirmation_code: hashedConfirmationCode,
      role,
    });
    return res.status(200).send("Registration successful");
  } catch (err) {
    return res.status(500).send("Error in registering user");
  }
};

module.exports = { registerNewUser };
