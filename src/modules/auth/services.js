// MODELS
const { User } = require('@models');

function getByUsername(query) {
	try {
		const user = User.findOne({ username: query });
		return user;
	} catch (err) {
		throw Error('Error at auth > getByUsername: ', err);
	}
}

function createUser(user) {
	try {
		return user.save();
	} catch (err) {
		throw Error('Error at auth > createUser: ', err);
	}
}

module.exports = {
	getByUsername,
	createUser
};
