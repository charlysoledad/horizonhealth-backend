const path = require('path');
require('dotenv-safe').config({
	path: path.join(__dirname, '../../.env.development'),
});

const common = require('./constants.common');

const getEnvironmentSpecificConstants = (env) => {
	switch (env) {
		case 'development': {
			return require('./constants.dev');
		}
		case 'production': {
			return require('./constants.prod');
		}
		default: {
			throw new Error(`no matching constants file found for env '${env}'`);
		}
	}
};

module.exports = Object.assign(common, getEnvironmentSpecificConstants(process.env.NODE_ENV));