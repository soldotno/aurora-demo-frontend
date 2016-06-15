/**
 * Import the existing webpack config
 */
var webpackConfig = require('./webpack.config.js');

/**
 * Export the karma config (with the webpack config injected)
 */
module.exports = require('aurora-core/karma.conf.js').extend(webpackConfig);
