const pool = require("../database/db");
const db = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// TODO: insert and test enpoints and database
// Fetch user by name and confirmation code
async function getUserByNameAndCode(name, emailCode) {
  const result = await pool.query(
    'SELECT * FROM "User" WHERE name = $1 AND email_code = $2',
    [name, emailCode],
  );
  return result.rows[0];
}

async function saveSmsCode(userId, smsCode) {
  const hashedCode = await bcrypt.hash(smsCode, 10);
  await pool.query(
    'UPDATE "User" SET sms_code = $1, sms_code_created_at = NOW() WHERE userId = $2',
    [hashedCode, userId],
  );
}

// Validate SMS confirmation code
async function validateSmsCode(userId, smsCode) {
  const result = await pool.query(
    'SELECT sms_code FROM "User" WHERE userId = $1',
    [userId],
  );
  if (result.rows.length > 0) {
    return bcrypt.compare(smsCode, result.rows[0].sms_code);
  }
  return false;
}

//    /api/login
const createAdmin = async (req, res) => {
  console.log("login user");
  const { name, surname, email, phone_number, confirmation_code } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM "user" WHERE name = $1 AND surname = $2 AND confirmation_code = $3',
      [name, surname, confirmation_code],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    } else {
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

  res.json(result.rows);
};

const loginAdmin = async (req, res) => {
  const { name, confirmation_code } = req.body;

  // Check if username and password is provided
  if (!name || !confirmation_code) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }

  try {
    const user = await pool.query(
      'SELECT * FROM "user" WHERE name = $1 AND confirmation_code = $2',
      [name, confirmation_code],
    );

    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: user._id, name, role: user.role },
        jwtSecret,
        {
          expiresIn: maxAge, // 3hrs in sec
        },
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });

      res.status(201).json({
        message: "User successfully Logged in",
        user: user._id,
      });
      // comparing given password with hashed password
      // bcrypt.compare(password, user.password).then(function (result) {
      //   result
      //     ? res.status(200).json({
      //         message: "Login successful",
      //         user,
      //       })
      //     : res.status(400).json({ message: "Login not succesful" })
      // })
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, confirmation_code } = req.body;
  if (!email || !confirmation_code)
    return res.status(400).send("Email oder Bestätigungscode fehlt");

  try {
    // search for user using email
    const user = await db.user.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(404).json("Email not found");
    }

    // Verify code from found user
    const confirmationCodeValid = await bcrypt.compare(
      confirmation_code,
      user.confirmation_code,
    );
    if (!confirmationCodeValid) {
      return res.status(404).json("Incorrect confirmation code");
    }

    // Authenticate user with jwt
    const token = jwt.sign(
      {
        UserInfo: {
          id: user.userId,
          role: user.role,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRATION,
      },
    );

    // const refreshToken = jwt.sign(
    //   {id: user.userId},
    //   process.env.JWT_REFRESH_TOKEN,
    //   {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPR}
    // );

    res.status(200).send({
      user,
      accessToken: token,
      // TODO: maybe send more?
    });
  } catch (err) {
    return res.status(500).send("Sign in error");
  }
};
module.exports = {
  loginUser,
};
