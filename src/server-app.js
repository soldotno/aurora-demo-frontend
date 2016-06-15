/**
 * Dependencies
 */
const debug = require('debug')('aurora-frontend:app'); // eslint-disable-line no-unused-vars
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const useragent = require('express-useragent');
const ms = require('ms');

/**
 * Import the server-rendering function
 * from aurora core and create an instance
 */
const renderServer = require('aurora-core/dist/render/server')({
  createHTML: require('./utils/create-html'),
  getRoute: require('./services/get-route-config'),
  getUserSettings: require('./utils/get-user-settings'),
  getPaginationSettings: require('./utils/get-pagination-settings'),
  getModule: require('./modules/get-module'),
  isVisible: require('./utils/is-visible'),
});

/**
 * Environment
 */
const PORT = process.env.PORT || 3000;

/**
 * Create express app
 */
const app = express();

/**
 * Use gzip compression
 */
app.use(compression());

/**
 * Add useragent parsing
 */
app.use(useragent.express());

/**
 * Parse incoming cookies
 */
app.use(cookieParser());

/**
 * Serve favicon
 */
app.use(favicon(`${__dirname}/../public/static/favicon.ico`));

/**
 * Serve static files
 */
app.use(express.static(`${__dirname}/../public`, { maxAge: ms('7 days') }));

/**
 * Use our server rendering function
 * as the main route handler
 */
app.use('/', renderServer);

/**
 * Start server
 */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));  // eslint-disable-line no-console
