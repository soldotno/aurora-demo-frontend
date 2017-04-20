/**
 * Dependencies
 */
const request = require('axios');
const urlJoin = require('url-join');

/**
 * Environment
 */
const { apiUrl } = require('../../../../config');

/**
 * Export a function that returns
 * a Promise of the data needed for
 * the module.
 */
module.exports = function getRandomizedData(options) {
  return request
    .get(urlJoin(apiUrl, 'data', 'randomized-data'), {
      params: options,
    })
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
