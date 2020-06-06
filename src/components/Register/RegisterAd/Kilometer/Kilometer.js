import React, { Component, Fragment } from "react";

import styles from "./Kilometer.module.css";

class Kilometer extends Component {
  state = {
    kilometerNumber: "",
  };

  ZeroKilometerHandler = () => {
    this.setState({
      kilometerNumber: 0,
    });
    this.props.progressValue(100);
  };

  NonZeroKilometerHandler = () => {
    this.setState({
      kilometerNumber: "",
    });
    this.props.progressValue(90);
  };
  changeKilometerTextBoxHandler = (input) => {
    this.setState({
      kilometerNumber: +input.target.value,
    });
    this.props.progressValue(100);
  };
  render() {
    return (
      <Fragment>
        <div className={styles.BtnsWrapper}>
          <button
            className={styles.KilometerBTN}
            style={
              this.state.kilometerNumber === 0
                ? { border: "2px solid var(--bama-color)" }
                : null
            }
            onClick={this.ZeroKilometerHandler}
          >
            صفر
          </button>
          <button
            className={styles.KilometerBTN}
            style={
              this.state.kilometerNumber !== 0
                ? { border: "2px solid var(--bama-color)" }
                : null
            }
            onClick={this.NonZeroKilometerHandler}
          >
            کارکرده
          </button>
        </div>
        <div className={styles.KilometerTextBoxWrapper}>
          <input
            className={styles.KilometerTextBox}
            type="tel"
            placeholder="کارکرده"
            maxLength={7}
            value={this.state.kilometerNumber}
            onChange={this.changeKilometerTextBoxHandler}
          />
          <span>کیلومتر</span>
          {/*<i className="selected-tick" style="display: none;"></i>*/}
        </div>
      </Fragment>
    );
  }
}

export default Kilometer;
