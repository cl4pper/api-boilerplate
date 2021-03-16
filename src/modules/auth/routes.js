require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// LIBS
const express = require('express');
const router = express.Router();
// CONTROLLERS
const AuthControllers = require('./controllers');

router.post('/auth/signup', AuthControllers.SignUp);
router.post('/auth/signin', AuthControllers.SignIn);

module.exports = router;
