/**
 * Include babel polyfill
 */
require('babel-polyfill');

const { nodeEnv } = require('../config');

/**
 * Add a global var to conform
 * to webpack config
 */
global.__DEVELOPMENT__ = nodeEnv !== 'production'; // eslint-disable-line no-underscore-dangle

/**
 * Run all requires in our server-side
 * app through babel, so we can use
 * ES2015 everywhere
 */
require('babel-core/register')({
  sourceMap: !__DEVELOPMENT__, // eslint-disable-line no-underscore-dangle, no-undef
});

/**
 * Use bluebird for as promise library
 */
global.Promise = require('bluebird');

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', (error) => {
  throw error;
});

/**
 * Run the actual app
 */
require('./server-app.js');
