
// CREATES A DEFAULT RETURN VALUE FOR MODULE REQUESTS
function defaultResponse({ status, data, error }) {
	return {
		status,
		data,
		error
	};
}

// CONVERTS RESPONSE TO A DEFAULT ERROR FORMAT
function responseError(res, status, message) {
	return res.status(status).send(defaultResponse({ status: status, error: message }));
}

module.exports = {
	defaultResponse,
	responseError
};
