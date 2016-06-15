/**
 * Dependencies
 */
const React = require('react');

/**
 * Component
 */
const ErrorMessage = React.createClass({
  propTypes: {
    error: React.PropTypes.object.isRequired
  },

  render() {
    const { error } = this.props;

    return (
      <div>Error: {JSON.stringify(error)}</div>
    );
  }
});

module.exports = ErrorMessage;
