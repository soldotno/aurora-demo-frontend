/**
 * Dependencies
 */
const React = require('react');

/**
 * Aurora module React component
 */
const VersionAlert = React.createClass({
  /**
   * Set some initial state
   */
  getInitialState() {
    return {
      loaded: false,
      href: null
    };
  },

  /**
   * Initialize on mount
   */
  componentDidMount() {
    this.setState({
      loaded: true,
      href: window.location.origin + (window.location.pathname || '')
    });
  },

  /**
   * Render the children (which in our case will be the App)
   */
  render() {
    /**
     * Inline styles
     */
    const styles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1em',
      background: '#fffea1',
      border: '1px solid #fc0',
      textAlign: 'center',
    };

    const { loaded, href } = this.state;

    /**
     * Only render if loaded on client
     */
    if (!loaded) {
      return null;
    }

    /**
     * Render a fixed header telling
     * you that a newer version of
     * this site is available
     */
    return (
      <div style={styles}>
        <p>En ny versjon av denne siden er tilgjengelig</p>
        <a href={href}>Klikk her for å laste</a>
      </div>
    );
  }
});

/**
 * Export component
 */
module.exports = VersionAlert;
