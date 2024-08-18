// src/controllers/userController.js
const pool = require("../database/db");

const createUser = async (req, res) => {
  const { name, email, phone_number } = req.body;
  try {
    const newUser = await pool.query(
      "INSERT INTO user (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *",
      [name, email, phone_number],
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getUser = async (req, res) => {
  const id = req.body.uid;
  try {
    const user = await pool.query("SELECT * FROM user WHERE id = $1", [id]);
    if (user.rows.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//    /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM "user"');
    if (users.rows.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//    /api/user/{userid}/addresses
const getUserAddresses = async (req, res) => {
  const id = req.body.uid;
  try {
    const user = await pool.query("SELECT * FROM address WHERE userid = $1", [
      id,
    ]);
    if (user.rows.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  getUserAddresses,
};
