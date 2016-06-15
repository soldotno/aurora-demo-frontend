/**
 * Dependencies
 */
const request = require('axios');

/**
 * Export a function that returns
 * a Promise of the data needed for
 * the module.
 */
module.exports = function(options) {
  return Promise.resolve(JSON.parse(JSON.stringify(options)));
};
