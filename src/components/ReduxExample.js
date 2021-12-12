import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { increment, decrement } from "../redux/actionsContainer/actionCreators";
import { getCount } from "../redux/selector/countSelector";
function ReduxExample(props) {
  console.log(useLocation());

  const { increment, decrement, count } = props;
  const selector = useSelector(getCount);
  const dispatchHook = useDispatch();
  console.log(selector);
  return (
    <div>
      <input type="text" value={count} />
      <button onClick={() => dispatchHook(increment(5))}>Increment</button>
      <button onClick={() => decrement(5)}>Decrement</button>
      {/* <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: getCount(state),
  };
};
const mapDispatchToprops = (dispach) => {
  return {
    increment: (number) => dispach(increment(number)),
    decrement: (number) => dispach(decrement(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ReduxExample);
