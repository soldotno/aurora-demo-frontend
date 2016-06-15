/**
 * Utils
 */
const escapeHtml = require('../utils/escape-html');

/**
 * Export a function that creates
 * the initial HTML markup for the application
 */
module.exports = function({
  appMarkup = '<div>missing</div>',
  criticalStyles = '',
  pagination = {},
  settings = {},
  flags = {},
  experiments = {},
  version = '',
  latestVersion = '',
  hash = '',
  config = {},
}) {
  /**
   * Pull out the page information
   * from the configuration
   */
  const {
    pageInfo: {
      title = 'Default Page Title',
      ogUrl = '',
      ogImage = '',
      ogDescription = '',
      ogSiteName = '',
      ogType = '',
      lpUrl = '',
    }
  } = config;

  /**
   * Create and return the actual HTML
   */
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <!-- Meta -->
      <title>${title}</title>
      <meta name="description" content="${ogDescription}" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
      <meta charset="UTF-8">

      <!-- Icons -->
      <link rel="apple-touch-icon" sizes="57x57" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="https://filarkiv.sol.no/site-icons/apple-touch-icon-152x152.png"/>
      <link rel="icon" type="image/png" href="https://filarkiv.sol.no/site-icons/favicon-96x96.png" sizes="96x96"/>
      <link rel="icon" type="image/png" href="https://filarkiv.sol.no/site-icons/favicon-16x16.png" sizes="16x16"/>
      <link rel="icon" type="image/png" href="https://filarkiv.sol.no/site-icons/favicon-32x32.png" sizes="32x32"/>
      <link rel="manifest" href="https://filarkiv.sol.no/site-icons/manifest.json"/>

      <!-- Properties -->
      <meta property="og:title" content="${title}">
      <meta property="og:type" content="${ogType}">
      <meta property="og:url" content="${ogUrl}">
      <meta property="og:image" content="${ogImage}">
      <meta property="og:description" content="${ogDescription}">
      <meta property="og:site_name" content="${ogSiteName}">

      <meta property="fb:admins" content="587395847">
      <meta property="fb:app_id" content="197647736926659">

      <meta name="twitter:widgets:csp" content="on">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@soldotno">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:url" content="${ogUrl}">
      <meta name="twitter:description" content="${ogDescription}">
      <meta name="twitter:creator" content="@soldotno">
      <meta name="twitter:image:src" content="${ogImage}">

      <!-- Server-side included styles -->
      <style type="text/css">${criticalStyles}</style>
    </head>

    <body>
      <!-- Markup from server -->
      <div id="app">${appMarkup}</div>

      <!-- Dehydrated data from server -->
      <script>window.__version = ${JSON.stringify(version)};</script>
      <script>window.__latestVersion = ${JSON.stringify(latestVersion)};</script>
      <script>window.__settings = ${JSON.stringify(settings)};</script>
      <script>window.__flags = ${JSON.stringify(flags)};</script>
      <script>window.__experiments = ${JSON.stringify(experiments)};</script>
      <script>window.__config = ${escapeHtml(JSON.stringify(config))};</script>
      <script>window.__pagination = ${JSON.stringify(pagination)};</script>

      <!-- Script bundles -->
      <script type="text/javascript" src="/static/app.${hash}.js" async></script>
    </body>

    </html>
  `;
};
