import React from 'react';
import styles from "./index.css";

export default React.createClass({
  render: function() {
    return (
      <header className={styles.root}>
        {this.props.children}
      </header>
    );
  }
});
