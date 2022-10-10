import React from "react";
import SearchBar1 from "./SearchBar1";

function ComponentDisplay(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "700px",
        justifyContent: "center",
        background: "rgb(237,237,237)",
      }}
    >
      <SearchBar1 />
    </div>
  );
}

export default ComponentDisplay;
