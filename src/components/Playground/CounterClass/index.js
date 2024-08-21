// Self contained
//update for this link
import React from "react";
//import { useState } from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      lastAction: "None",
    };
  }
  render() {
    const handleIncrementClick = () => {
      this.setState({
        counter: this.state.counter + 1,
        lastAction: "Increased",
      });
    };

    const handleDecrementClick = () => {
      this.setState({
        counter: this.state.counter - 1,
        lastAction: "Decreased",
      });
    };
    return (
      <div>
        Counter: {this.state.counter}
        <div>Last Action: {this.state.lastAction}</div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
      </div>
    );
  }
}

export default CounterClass;
