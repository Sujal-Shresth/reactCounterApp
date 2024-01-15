import React, { Component } from "react";

// css module
import styles from "../export.module.css";

// inline styling
let h1Color = {
  color: "aqua",
};

class Container extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handleReset = () => {
      this.setState({
        count: 0,
      });
    };
  }

  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1 style={h1Color}>Counter App</h1>

        <div className={styles.component} id="number">
          {this.state.count}
        </div>

        <div className="component">
          {/* method 1 */}
          <button onClick={this.handleIncrement.bind(this)}>+</button>

          {/* method 2 */}
          <button onClick={() => this.handleDecrement()}>-</button>

          {/* method 3 */}
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Container;
