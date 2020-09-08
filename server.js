require('module-alias/register');
require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const mongoose = require('mongoose');
const mongoDB = process.env.API_URL;
const port = process.env.PORT;
const app = require('./src/app');

// CONNECT TO DATABASE
mongoose.set('useCreateIndex', true);
mongoose
	.connect(mongoDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb...'))
	.catch(err => console.error('NOT connect to mongodb!', err));

app.listen(port, () => {
	console.log('Server is running on PORT:', process.env.PORT);
	console.log('API URL:', process.env.API_URL);
	console.log('TEST URL:', process.env.TEST_URL);
});
