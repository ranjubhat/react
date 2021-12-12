import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../components/ContextParent";
function ContextChild(props) {
  const contextValue = useContext(UserContext);
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div>{contextValue}</div>
      <div>item2</div>
      <div>item3</div>
      <button onClick={() => history.push({pathname:"/redux",state:"test"})}>Move to redux</button>
    </div>
  );
}

export default ContextChild;
