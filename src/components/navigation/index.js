import React from 'react';
import styles from "./index.css";

export default React.createClass({
  render: function() {
    return (
      <nav className={styles.root}>
        <a className={styles.link} href="#">Link 1</a>
        <a className={styles.link} href="#">Link 2</a>
      </nav>
    );
  }
});
