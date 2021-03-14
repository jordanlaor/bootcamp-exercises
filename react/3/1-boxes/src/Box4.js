import React from 'react';
const Box4 = (props) => {
  return (
    <div style={{width: `${props.size * 3}px`, height: `${props.size}px`, background: "purple", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}></div>
  )
}

export default Box4