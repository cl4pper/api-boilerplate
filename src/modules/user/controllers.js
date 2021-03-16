require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

// SERVICES
const UserServices = require('./services');
// UTILS
const { defaultResponse, responseError } = require('@utils');

async function GetUsers (req, res) {

	try {
		let users = await UserServices.getUsers();
		if (!users.length) return responseError(res, 204, 'No user registered');

		return res
			.status(200)
			.send(defaultResponse({ status: 200, data: users }));
	} catch(err) {
		return responseError(res, 400, err.message);
	}
}

module.exports = {
	GetUsers
};
