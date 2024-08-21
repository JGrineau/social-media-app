import React, { useState } from "react";

const CounterFunction = () => {
  const [counter, setCounter] = useState(0);
  const [lastAction, setlastAction] = useState();

  const handleIncrementClick = () => {
    setCounter(counter + 1);
    setlastAction("increased: ");
  };

  const handleDecrementClick = () => {
    setCounter(counter - 1);
    setlastAction("Decreased: ");
    console.log("This has been decreased")
  };
  return (
    <div>
      Counter: {counter}
      <div>Last Action: {lastAction}</div>
      <button onClick={handleIncrementClick}>Increase</button>
      <button onClick={handleDecrementClick}>Decrease</button>
    </div>
  );
};

export default CounterFunction;
