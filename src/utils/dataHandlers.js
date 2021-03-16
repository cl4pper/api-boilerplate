const bcrypt = require('bcrypt');
//
const { User } = require('@models');

async function saltPassword(password) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
}

async function formatUser (data) {
	const user = new User({
		...data,
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	user.password = await saltPassword(user.password);

	return user;
}

module.exports = {
	formatUser
}
