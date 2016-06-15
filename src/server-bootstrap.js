/**
 * Include babel polyfill
 */
require('babel-polyfill');

/**
 * Add a global var to conform
 * to webpack config
 */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

/**
 * Run all requires in our server-side
 * app through babel, so we can use
 * ES2015 everywhere
 */
require('babel-core/register')({
  sourceMap: !__DEVELOPMENT__
});

/**
 * Use bluebird for as promise library
 */
global.Promise = require('bluebird');

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', function(error) {
  throw error;
});

/**
 * Run the actual app
 */
require('./server-app.js');
