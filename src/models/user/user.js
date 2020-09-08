const mongoose = require('mongoose');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		friends: {
			type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
			require: true
		},
		createdAt: {
			type: Date,
			required: true
		},
		updatedAt: {
			type: Date,
			required: true
		}
	})
);

module.exports = {
	User
};
