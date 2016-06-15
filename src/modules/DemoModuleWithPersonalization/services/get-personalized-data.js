/**
 * Dependencies
 */
const request = require('axios');
const urlJoin = require('url-join');

/**
 * Environment
 */
const apiUrl = process.env.API_URL;

/**
 * Export a function that returns
 * a Promise of the data needed for
 * the module.
 */
module.exports = function(options) {
  return request
    .get(urlJoin(apiUrl, 'data', 'personalized-data'), {
      params: options
    })
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
