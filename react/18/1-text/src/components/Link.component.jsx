import React from "react";
export default ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: "5px" }}>
      {text}
    </button>
  );
};
