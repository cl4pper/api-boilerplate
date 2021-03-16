require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// SERVICES
const AuthServices = require('./services');
// UTILS
const { defaultResponse, responseError, formatUser } = require('@utils');

async function SignUp (req, res) {
	const body = req.body;
	const username = body.username;

	try {
		let user = await AuthServices.getByUsername(username);
		if (user) return responseError(res, 400, 'Username already registered');

		user = await formatUser(body);

		AuthServices.createUser(user);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'SUCCESS REGISTRATION' }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

async function SignIn(req, res) {
	const body = req.body;
	const username = body.username;
	const password = body.password;

	try {
		// USERNAME VERIFICATION
		let user = await AuthServices.getByUsername(username);
		if (!user) return responseError(res, 400, 'Invalid username or password');

		// PASSWORD VERIFICATION
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) return responseError(res, 400, 'Invalid username or password.');

		const userToken = jwt.sign(
			{
				_id: user._id,
				username: user.username,
			},
			process.env.JWT_PRIVATE_KEY
		);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: userToken }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

module.exports = {
	SignUp,
	SignIn
};
