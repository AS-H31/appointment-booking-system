// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, loginUser, getUserAddresses } = require('../controllers/userController');

router.get('/', getAllUsers);

router.post('/login', loginUser)

router.get('/user/addresses', getUserAddresses);

module.exports = router;
