import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import withCounter from "./withCounter";

function Counter(props) {
  const { count, incrementCounter } = props;
  return (
    <ErrorBoundary>
      <div>
        <h1>HIII</h1>
        <button onClick={incrementCounter}>Increment{count}</button>
      </div>
    </ErrorBoundary>
  );
}

export default withCounter(Counter);
