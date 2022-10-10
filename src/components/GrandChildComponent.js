import React, { useContext } from "react";
import { UserContext } from "./ContextParent";
function GrandChildComponent(props) {
  const contextValue = useContext(UserContext);
  return <div>{contextValue}</div>;
}

export default GrandChildComponent;
