/**
 * Function for determining the visibility
 * of a module given a visibility object in the form of:
 *
 * {
 *   include: ['small', 'medium', 'large']
 * }
 *
 * or
 *
 * {
 *   exclude: ['app']
 * }
 *
 * ..returning either true or false
 */
module.exports = function (
  settings = {},
  query = {},
  visibility = {}
) {
  /**
   * Destructure visibility object
   *
   * NOTE: Should contain
   * an array of includes
   * or excludes
   */
  const {
    include,
    exclude,
  } = visibility;

  /**
   * Destructure settings
   *
   * NOTE: Could include
   * user agent, etc..
   * It's up to you really!
   */
  const {
    ua = {},
  } = settings;

  /**
   * EXAMPLE:
   *
   * Default browser size/device
   */
  let size = 'large';

  /**
   * Handle medium size browsers
   */
  if (window.innerWidth < 768) {
    size = 'medium';
  }

  /**
   * Handle small size browsers
   */
  if (window.innerWidth < 480) {
    size = 'small';
  }

  /**
   * Handle request query
   */
  if (
    query.device === 'android' ||
    query.device === 'ios'
  ) {
    size = 'app';
  }

  /**
   * Handle includes (precedence)
   */
  if ((include || []).length) {
    return !!~include.indexOf(size);
  }

  /**
   * Handle excludes
   */
  if ((exclude || []).length) {
    return !~exclude.indexOf(size);
  }

  /**
   * If no includes or excludes are provided
   * we default to showing the element
   */
  return true;
};
