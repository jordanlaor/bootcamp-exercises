import React from "react";
import Box4 from "./Box4";
const Box3 = (props) => {
  return (
    <div
      style={{
        width: `${props.size * 1.5}px`,
        height: `${props.size}px`,
        background: "pink",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Box4 size={`${props.size * 0.44}`} />
      <Box4 size={`${props.size * 0.44}`} />
    </div>
  );
};

export default Box3;
