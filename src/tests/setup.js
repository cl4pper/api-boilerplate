const mongoose = require('mongoose');
require('dotenv').config();

beforeAll((done) => mongoose.connect(process.env.TEST_URL, done));
afterAll((done) => mongoose.connection.dropDatabase(done));
