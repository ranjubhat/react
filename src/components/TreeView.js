import React, { useState } from "react";
function TreeView({ treeData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <span
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          fontWeight: treeData.isFolder ? "bold" : "normal",
        }}
      >
        {treeData.name}
      </span>
      {treeData?.children?.length > 0 && expanded && (
        <div style={{ dispaly: "block", paddingLeft: "30px" }}>
          {treeData.children.map((child) => {
            return <TreeView treeData={child} key={child.name} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TreeView;
