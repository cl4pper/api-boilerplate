// MODELS
const { User } = require('@models');

function getUsers() {
	try {
		const users = User.find().select('-__v -password');
		return users;
	} catch (err) {
		throw Error('Error at user > getUsers: ', err);
	}
}

module.exports = {
	getUsers
};
