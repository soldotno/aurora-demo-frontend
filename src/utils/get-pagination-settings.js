/**
 * Export a function that extends the
 * default pagination settings with
 * user defined ones
 */
module.exports = function getPaginationSettings(req) {
  /**
   * Set user defined pagination settings
   */
  return {
    perPage: 8,
    initialLimit: 10,
  };
};
