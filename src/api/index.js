const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const cookieParser = require("cookie-parser");
const verifyJwt = require("./middleware/verfiyJWT");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

dotenv.config();
const app = express();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross origin Resource Sharing
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(cookieParser());

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
