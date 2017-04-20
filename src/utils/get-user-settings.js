/**
 * Import dependencies
 */
const getDeviceId = require('./get-device-id');

/**
 * Export a function that returns the user settings
 * we want to include in our application
 */
module.exports = function getUserSettings(req, res) {
  /**
   * Create some global settings
   *
   * - seed for deterministic random randomization
   * - user identification
   * - request ip address
   * - etc..
   */
  return {
    seed: JSON.stringify(Date.now()),
    user: req.get('user') || 'not-logged-in',
    ip: req.ip || '127.0.0.1',
    deviceId: getDeviceId(req, res),
    ua: req.useragent || '',
  };
};
