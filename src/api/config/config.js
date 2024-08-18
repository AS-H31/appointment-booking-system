const dotenv = require('dotenv');
dotenv.config();

module.exports = {
development: {
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  dialect: "postgres",
  dialectOptions: {
  },
},
production: {
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  dialect: "postgres",
  ssl: 'require'
}
}
