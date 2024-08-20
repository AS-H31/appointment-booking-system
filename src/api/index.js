const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const cookieParser = require("cookie-parser");
const verifyJwt = require("./middleware/verfiyJWT");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", loginRoutes);

app.use(verifyJwt); // ab hier brauchen die routen eine valide jwt token

app.use("/api/users", userRoutes);
