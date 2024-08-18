const express = require('express');
const router = express.Router();
const { getAllUsers, getUserAddresses } = require('../controllers/userController');

router.get('/', getAllUsers);

router.get('/user/addresses', getUserAddresses);

module.exports = router;
