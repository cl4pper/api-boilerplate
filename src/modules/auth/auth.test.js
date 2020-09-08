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

const signup = supertest('http://localhost:3000/api/auth/signup');

const user = {
	username: 'User',
	password: '123456',
};

describe('Auth module', () => {
	beforeAll(async () => {
		await User.deleteMany({});
	});

	afterAll(async () => {
		await User.deleteMany({});
		await mongoose.connection.close();
	});

	describe('Signup route', () => {
		it('should register new user', async () => {
			return signup
				.post('/')
				.send(user)
				.then(res => {
					expect(res.body).toHaveProperty('status', 200);
					expect(res.body).toHaveProperty('data', 'SUCCESS REGISTRATION' );
				})
		});
		it('prevent repeated username', async () => {
			return signup
				.post('/')
				.send(user)
				.then(res => {
					expect(res.body).toHaveProperty('status', 400);
					expect(res.body).toHaveProperty('error', 'Username already registerd');
				})
		})
	})
});
