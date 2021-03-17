import React from "react";
import Box2 from "./Box2";
const Box1 = (props) => {
  return (
    <div
      style={{
        width: `${props.size * 1.5}px`,
        height: `${props.size}px`,
        background: "green",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Box2 size={`${props.size * 0.9}`} />
    </div>
  );
};

export default Box1;
