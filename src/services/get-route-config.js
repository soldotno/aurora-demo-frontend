/**
 * Dependencies
 */
const isBrowser = require('is-client')();
const axios = require('axios');
const qs = require('qs');
const urlJoin = require('url-join');
const debug = require('debug')('aurora-frontend:get-page-config');

/**
 * Environment
 */
const apiUrl = process.env.API_URL;

/**
 * Create request module
 * that stringifies nested
 * objects as query strings
 * that the qs module can
 * parse into valid objects
 * on the other end
 */
const request = axios.create({
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

/**
 * Export a function that fetches
 * a page config based on input parameters
 */
module.exports = function ({
  path = '/',
  query = {},
  page = 0,
  skip = 0,
  limit = Infinity,
  version = '',
  settings = {},
}) {
  /**
   * Set up the query we want to
   * supply to the API endpoint
   */
  const apiQuery = {
    params: {
      options: { ...query },
      page,
      skip,
      limit,
      version,
      settings,
    }
  };

  /**
   * Create a closure for returning
   * the requested path from the API
   */
  const requestFromApi = () => {
    return request
    .get(urlJoin(apiUrl, 'routes', path), apiQuery)
    .then(response => response.data);
  };

  /**
   * Use either the cache or the API directly
   */
  return requestFromApi();
};
