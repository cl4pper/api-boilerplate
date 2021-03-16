require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});
const supertest = require('supertest');
const mongoose = require('mongoose');

const mongoDB = process.env.TEST_URL;
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const { User } = require('@models');

const getUsers = supertest('http://localhost:3000/api/users');

describe('User module', () => {
	beforeAll(async () => {
		await User.deleteMany({});
	});

	afterAll(async () => {
		await User.deleteMany({});
		await mongoose.connection.close();
	});

	describe('getUsers route', () => {
		it('should return no user', async () => {
			return getUsers
				.get('')
				.then(res => {
					expect(res.status).toBe(204);
				})
		});
	})
});
