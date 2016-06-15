/**
 * Dependencies
 */
const React = require('react');
const isBrowser = require('is-client')();
const compose = require('lodash.compose');

/**
 * A higher order module
 * that can wrap any number of modules
 *
 * A flow within the flow (grouping things f.ex)
 */
const DemoHigherOrderModule = React.createClass({
  propTypes: {
    element: React.PropTypes.string,
    classes: React.PropTypes.string,
    modules: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      element: 'div',
      classes: '',
      modules: [],
    };
  },

  render() {
    let {
      element,
      classes,
      modules,
    } = this.props;

    /**
     * This is the higher order part
     * (just copy/paste this basically)
     * and do whatever you need to
     * render stuff the way you want
     */
    let children = modules.map((module, i) => {
      let Module = module.type;

      return (
        <Module
          key={i}
          {...module.options}
        />
      );
    });

    return (
      React.createElement(element, {
        className: classes
      }, children)
    );
  }
});

/**
 * Aurora decorators
 */
const withVisibility = require('aurora-core/dist/decorators/with-visibility');
const withStyles = require('aurora-core/dist/decorators/with-styles');

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
    serverPath: `${__dirname}/styles/my-container-styles.scss`,
    clientStyles: isBrowser && require('./styles/my-container-styles.scss'),
  }),
);

/**
 * Finally export the module
 * extended with Aurora functionality
 */
module.exports = extendWithAuroraFunctionality(DemoHigherOrderModule);
