/**
 * Dependencies
 */
const React = require('react');
const isBrowser = require('is-client')();
const compose = require('lodash.compose');

/**
 * Components for this module
 */
const Loading = require('./components/Loading.jsx');
const Main = require('./components/Main.jsx');

/**
 * Aurora module React component
 */
const DemoModuleWithGeolocation = React.createClass({
  render() {
    /**
     * Handle data loading if you want
     * a loading spinner and not "dead" data
     */
    const {
      isLoadingData,
      data
    } = this.props;

    /**
     * Until we have data
     * show a loading indicator
     */
    if (isLoadingData) {
      return (
        <Loading />
      );
    }

    /**
     * The actual stuff you want to show
     */
    return (
      <Main
        {...this.props}
        /**
         * let's forward the
         * data as well
         */
        data={data}
      />
    );
  }
});

/**
 * Aurora decorators
 */
const withVisibility = require('aurora-core/dist/decorators/with-visibility');
const withStyles = require('aurora-core/dist/decorators/with-styles');
const withData = require('aurora-core/dist/decorators/with-data');
const withScripts = require('aurora-core/dist/decorators/with-scripts');

/**
 * Create a function that extends the
 * component with all the Aurora specific functionality
 */
const extendWithAuroraFunctionality = compose(
  /**
   * Wrap the module in Aurora
   * visibility resolving
   * (required)
   */
  withVisibility,
  /**
   * Wrap the module in Aurora
   * style injection
   * (required)
   */
  withStyles({
    serverPath: `${__dirname}/styles/my-module-styles.scss`,
    clientStyles: isBrowser && require('./styles/my-module-styles.scss'),
  }),
  /**
   * Wrap the module in Aurora
   * data fetching
   * (optional)
   */
  withData({
    disableServerLoading: true,
    fetchData: require('./services/get-geolocated-data'),
    dataProp: 'data',
    loadingProp: 'isLoadingData'
  }),
  /**
   * Wrap the module in Aurora
   * script injection
   * (optional)
   */
  withScripts({
    scripts: require('./injects/scripts'),
  })
);

/**
 * Finally export the module
 */
module.exports = extendWithAuroraFunctionality(DemoModuleWithGeolocation);
