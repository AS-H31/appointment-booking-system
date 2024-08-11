// src/config/db.js
const { Pool } = require('pg');
const { dbHost, dbUser, dbName, dbPass } = require('./config');

const pool = new Pool({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPass,
    port: 5432,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
