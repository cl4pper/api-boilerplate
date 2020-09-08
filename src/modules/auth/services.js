// MODELS
const { User } = require('@models');

function getUsername(query) {
	try {
		const user = User.findOne({ username: query });
		return user;
	} catch (err) {
		throw Error('Error at getUsername: ', err);
	}
}

function createUser(user) {
	try {
		return user.save();
	} catch (err) {
		throw Error('Error at createUser: ', err);
	}
}

module.exports = {
	getUsername,
	createUser
};
