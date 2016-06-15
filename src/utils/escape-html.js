/**
 * Escape </script> in the config object, so it won't destroy html
 *
 * TODO: This should be done somewhere else preferably! (In the API - or whoever delivers it)
 */
module.exports = function(configString) {
  return configString.replace(/<\/script>/gi, '<\\/script>');
};
