const { defaultResponse, responseError } = require('./responseHandlers');
const { formatUser } = require('./dataHandlers');

module.exports = {
	defaultResponse,
	responseError,
	formatUser
};
