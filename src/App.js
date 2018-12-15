import React, { Component } from "react";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  menuClicked() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleOne}>cajun</div>
          <div className={styles.titleIcon}>
            <i className="fas fa-warehouse fa-2x" />
          </div>
          <div className={styles.titleTwo}>shack</div>
          <div onClick={this.menuClicked.bind(this)} className={styles.navContainer}>
            <button className={this.state.isOpen ? styles.navToggleOpen : styles.navToggle} />
          </div>
        </div>
        <div className={`${styles.menu} ${this.state.isOpen ? styles.menuOpen : styles.menuClose}`} />
      </div>
    );
  }
}

export default App;
