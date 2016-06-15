/**
 * Dependencies
 */
const Cookie = require('js-cookie');
const ms = require('ms');
const uuid = require('uuid');
const isValidUuid = require('uuid-validate');

/**
 * Configuration
 */
const cookieName = process.env.DEVICE_ID_COOKIE_NAME || 'SOL-User';
const cookieDays = parseInt(process.env.DEVICE_ID_COOKIE_DAYS, 10) || 180;
const cookieExpire = ms(`${cookieDays} days`);

/**
 * Client side: Uses window.document.cookie
 */
function processClient() {
  /**
   * Fetch the existing cookie
   */
  const userCookie = Cookie.get(cookieName);

  /**
   * Validate the cookie as a UUID v4 or create a new one
   */
  const deviceId = userCookie && isValidUuid(userCookie, 4) ? userCookie : uuid.v4();

  /**
   * Refresh the cookie value and expiry date
   */
  Cookie.set(cookieName, deviceId, {
    path: '/',
    expires: new Date(Date.now() + cookieExpire)
  });

  /**
   * Return the current device id
   */
  return deviceId;
}

/**
 * Server side: get cookie from request, set it on the response
 */
function processServer(req, res) {
  /**
   * Fetch the existing cookie
   */
  const userCookie = (req.cookies || {})[cookieName];

  /**
   * Validate the cookie as a UUID v4 or create a new one
   */
  const deviceId = userCookie && isValidUuid(userCookie, 4) ? userCookie : uuid.v4();

  /**
   * Refresh the cookie value and expiry date
   */
  res.cookie(cookieName, deviceId, {
    path: '/',
    expires: new Date(Date.now() + cookieExpire)
  });

  /**
   * Return the current device id
   */
  return deviceId;
}

/**
 * Create or retrieve the deviceID and its cookie, either on the server or client side.
 */
module.exports = function (req, res) {
  return (!req && !res && window) ? processClient() : processServer(req, res);
};
