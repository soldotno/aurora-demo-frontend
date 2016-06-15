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
  /**
   * Feature detect the Geolocation API
   * (NOTE: this only works client-side!)
   */
  if (
    typeof navigator === 'undefined' &&
    !(geolocation in navigator)
  ) {
    return Promise.reject(new Error('Need browser to perform geolocation'));
  }

  /**
   * Fetch data from an API/service where you supply
   * the geolocation data as part of the input
   *
   * NOTE: You should only change the end-point here,
   * as the rest of the data will be provided by the
   * Aurora "framework" using the 'withData' decorator
   *
   * NOTE: Most often you can just copy/paste this file
   * and change the url / API endpoint
   *
   * NOTE: Using __latitude and __longitude is a convention
   * to make things predictable
   */
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      maximumAge: 30000,
    });
  })
  .then(({ coords: { latitude, longitude } }) => {
    return request
    .get(urlJoin(apiUrl, 'data', 'geolocated-data'), {
      params: Object.assign({}, options, {
        __latitude: latitude,
        __longitude: longitude,
      })
    })
    .then(response => response.data)
  })
  .catch((error) => {
    console.error(error);
    return Promise.reject(error);
  });
};
