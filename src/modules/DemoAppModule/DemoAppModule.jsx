/**
 * Dependencies
 */
const React = require('react');
const isBrowser = require('is-client')();
const compose = require('lodash.compose');

/**
 * Aurora specific mixin to conveniently
 * render modules for higher order components
 */
const RenderChildrenMixin = require('aurora-core/dist/mixins/render-children-mixin');

/**
 * Import shared components
 */
const VersionAlert = require('../../shared-components/VersionAlert.jsx');

/**
 * An app module
 * that should be used as a
 * top level module
 * in the config
 */
const DemoAppModule = React.createClass({
  /**
   * These are all Aurora-specific mixins
   * to include different functionality
   * that the module needs
   */
  mixins: [
    RenderChildrenMixin()
  ],

  propTypes: {
    pagination: React.PropTypes.shape({
      isLoading: React.PropTypes.bool
    }),
    newVersionAvailable: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      pagination: {
        isLoading: false
      },
      newVersionAvailable: false,
    };
  },

  render() {
    const {
      pagination: { isLoading },
      newVersionAvailable,
    } = this.props;

    return (
      <main style={{ height: '101vh' }}>
        {newVersionAvailable && <VersionAlert />}
        {/* the function below is exposed by render-modules-mixin */}
        {this.renderChildren()}
        {isLoading && <div>Loading...</div>}
      </main>
    );
  }
});

/**
 * Aurora decorators
 */
const withVisibility = require('aurora-core/dist/decorators/with-visibility');
const withStyles = require('aurora-core/dist/decorators/with-styles');
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
    serverPath: `${__dirname}/styles/my-app-styles.scss`,
    clientStyles: isBrowser && require('./styles/my-app-styles.scss'),
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
 * Finally export the module
 * extended with Aurora functionality
 */
module.exports = extendWithAuroraFunctionality(DemoAppModule);
