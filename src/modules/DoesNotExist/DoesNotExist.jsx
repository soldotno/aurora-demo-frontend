/**
 * Dependencies
 */
const React = require('react');

/**
 * Default empty component for graceful failing
 */
const DoesNotExist = React.createClass({
  render() {
    return null;
  }
});

module.exports = DoesNotExist;
