/**
 * Dependencies
 */
const React = require('react');
const isBrowser = require('is-client')();
const compose = require('lodash.compose');

/**
 * Components for this module
 */
const Main = require('./components/Main.jsx');

/**
 * Aurora module React component
 */
const DemoModuleWithRedux = React.createClass({
  render() {
    return (
      <Main {...this.props} />
    );
  }
});

/**
 * Aurora decorators
 */
const withVisibility = require('aurora-core/dist/decorators/with-visibility');
const withStyles = require('aurora-core/dist/decorators/with-styles');
const withRedux = require('aurora-core/dist/decorators/with-redux');
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
   * Wrap the module in Redux state handling
   * (optional)
   */
  withRedux({
    reducer: require('./reducers').default,
    initialState: {
      error: null,
      isLoading: true,
      data: {},
    }
  }),
  /**
   * Wrap the module in Aurora
   * script injection
   * (optional)
   */
  withScripts({
    scripts: require('./injects/scripts'),
  }),
);

/**
 * Finally export the module extended with Aurora functionality
 */
module.exports = extendWithAuroraFunctionality(DemoModuleWithRedux);
