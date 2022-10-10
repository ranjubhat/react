import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
function About(props) {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.value };
      case "decrement":
        if (state.count - action.value < 0) {
          return { ...state, count: state.count };
        } else {
          return { ...state, count: state.count - action.value };
        }
      case "reset":
        return { ...state, count: initialState.count };
      default:
        return state;
    }
  };

  const [localCount, dispatch] = useReducer(reducer, initialState);

  const params = useParams();
  console.log(params);
  return (
    <div>
      {params.id}
      <input type="text" value={localCount.count} />
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={props.onButtonClick}>Click Button</button>
    </div>
  );
}

export default About;
