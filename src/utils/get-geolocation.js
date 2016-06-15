/* global navigator */

/**
 * Get the current geolocation
 * of a user (browser)
 */
module.exports = function() {
  /**
   * Check if the geolocation API exists
   * (if it doesn't we default to a pre-set value)
   */
  if (
    typeof navigator === 'undefined' &&
    !('geolocation' in navigator)
  ) {
    return Promise.resolve({
      coords: { latitude: 0, longitude: 0 },
      timestamp: Date.now()
    });
  }

  /**
   * Return a Promise of the current location
   * (if it fails we default to a pre-set value)
   */
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(resolve, () => {
      resolve({
        coords: { latitude: 0, longitude: 0 },
        timestamp: Date.now()
      });
    }, {
      maximumAge: 30000,
    });
  });
};
