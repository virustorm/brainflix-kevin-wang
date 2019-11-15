const fs = require('fs');
const uuid = require('uuid/v4');

var Chance = require('chance');
var chance = new Chance();

const randomName = () => {
	return chance.name();
};
const randomComment = () => {
	return chance.sentence();
};

const randomInt = () => {
	return chance.integer({ min: 0, max: 99999999999999 });
};

const getNewId = () => {
	return uuid();
};

const randomEmail = () => {
	return chance.email({ domain: 'gmail.com' });
};

const randomAvatar = () => {
	return chance.avatar({ email: randomEmail() });
};

module.exports = {
	getNewId,
	randomInt,
	randomName,
	randomComment,
	randomAvatar
};
