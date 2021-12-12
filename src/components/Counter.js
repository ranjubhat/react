import React from "react";
import withCounter from "./withCounter";

function Counter(props) {
  const { count, incrementCounter } = props;
  return (
    <div>
      <h1>HIII</h1>
      <button onClick={incrementCounter}>Increment{count}</button>
    </div>
  );
}

export default withCounter(Counter);
