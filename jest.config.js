module.exports = {
	testEnvironment: 'node',
	testRegex: "((\\.|/*.)(test))\\.js?$",
	moduleNameMapper: {
		"@models": "<rootDir>/src/models",
		"@tests": "<rootDir>/src/tests",
		"@routes/(.*)": "<rootDir>/src/routes/$1",
		"@middlewares": "<rootDir>/src/middlewares",
		"@utils": "<rootDir>/src/utils"
	}
};
