const faker = require('faker');
const { factory } = require('factory-girl');
const { Country } = require('@models');

factory.define('Country', Country, {
	name: faker.address.country(),
});

module.exports = factory;
