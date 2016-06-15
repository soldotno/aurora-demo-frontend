/**
 * Environment
 */
const port = process.env.PORT || 3000;

/**
 * Import / run the dev server
 */
require('aurora-core/dev-server')({
  webpackConfig: require('./webpack.config.js'),
  port,
  onListen(err) {
    if (err) return console.log(err);
    console.log('Listening at localhost:', port);
  }
});
