import React from "react";
import AsyncAwaitComponent from "./AsyncAwaitComponent";
import Callback from "./callback";
import PromiseComponent from "./Promise";
function Async() {
  return (
    <div>
      {/* <Callback /> */}
      <PromiseComponent />
      {/* <AsyncAwaitComponent /> */}
    </div>
  );
}
export default Async;
