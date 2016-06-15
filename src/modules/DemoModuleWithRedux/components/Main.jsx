/**
 * Dependencies
 */
const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');

/**
 * Actions
 */
const { populateData } = require('../actions');

/**
 * Sub-components
 */
const Loading = require('./Loading.jsx');

/**
 * Component
 */
const Main = React.createClass({
  propTypes: {
    isLoading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    actions: React.PropTypes.shape({
      populateData: React.PropTypes.func.isRequired,
    }),
    _dataOptions: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      _dataOptions: {}
    };
  },

  componentDidMount() {
    const {
      actions: { populateData },
      _dataOptions
    } = this.props;

    populateData(_dataOptions);
  },

  render() {
    /**
     * Handle data loading if you want
     * a loading spinner and not "dead" data
     */
    const {
      isLoading,
      data,
      error
    } = this.props;

    /**
     * Show error message
     * if there's an error
     */
    if (error) {
      return (
        <ErrorMessage error={error} />
      );
    }

    /**
     * Until we have data
     * show a loading indicator
     */
    if (isLoading) {
      return (
        <Loading />
      );
    }

    /**
     * The actual stuff you want to show
     */
    return (
      <div style={{ height: '50vh', border: '1px solid red', margin: '10px' }}>
        {JSON.stringify(this.props)}
      </div>
    );
  }
});

/**
 * A function to map from
 * redux state to React props
 */
function mapStateToProps(state) {
  return state;
}

/**
 * A function to map from
 * redux actions to React props
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      populateData,
    }, dispatch)
  };
}

/**
 * Export a redux-"connected" version of the component
 */
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
