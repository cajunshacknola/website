import React, { Component } from "react";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.iconTop}>
            <i class="fab fa-twitter" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
