const port = require('./config').port;
const webpackConfig = require('./webpack.config');

/**
 * Environment
 */

/**
 * Import / run the dev server
 */
require('aurora-core/dev-server')({
  webpackConfig,
  port,
  onListen(err) { // eslint-disable-line consistent-return
    if (err) return console.log(err);
    console.log('Listening at localhost:', port);
  },
});
