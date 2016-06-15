/**
 * Polyfills and shims
 */
require('es5-shim/es5-shim');
require('es5-shim/es5-sham');
require('babel-polyfill');

/**
 * Use bluebird for better error handling in development
 */
if (__DEVELOPMENT__) {
  /**
   * Use bluebird for promises
   */
  window.Promise = require('bluebird');

  /**
   * Suppress warnings of runaway Promises.
   * Bug when used together with Babel causes
   * harmless and non-applicative (but annyoing) warnings..
   */
  Promise.config({
    warnings: false
  });

  /**
   * Globally handle unhandled promise rejections
   */
  window.addEventListener('unhandledrejection', function(e) {
    e.preventDefault();
    throw e.detail.reason;
  });
}

/**
 * Initialize and render the client app
 */
require('aurora-core/dist/render/client')({
  getRoute: require('./services/get-route-config'),
  getModule: require('./modules/get-module'),
  isVisible: require('./utils/is-visible'),
});
