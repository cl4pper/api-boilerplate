require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// LIBS
const express = require('express');
const router = express.Router();
// CONTROLLERS
const UserControllers = require('./controllers');

router.get('/users', UserControllers.GetUsers);

module.exports = router;
