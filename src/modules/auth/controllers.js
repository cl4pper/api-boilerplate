require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// SERVICES
const AuthServices = require('./services');
// UTILS
const { defaultResponse, responseError, formatUser } = require('@utils');

async function SignUp (req, res) {
	const body = req.body;
	const username = body.username;

	try {
		let user = await AuthServices.getUsername(username);
		if (user) return responseError(res, 400, 'Username already registerd');

		user = await formatUser(body);

		AuthServices.createUser(user);

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: 'SUCCESS REGISTRATION' }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

module.exports = {
	SignUp
};
