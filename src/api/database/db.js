// src/config/db.js
const { Pool } = require('pg');
const { username, password, database, host } = require('../config/config');

const pool = new Pool({
    user: username,
    host,
    database,
    password,
    port: 5432,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
