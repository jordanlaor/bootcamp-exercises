import React from 'react';
import Box3 from './Box3'
const Box2 = (props) => {
  return (
    <div style={{width: `${props.size * 1.5}px`, height: `${props.size}px`, background: "skyblue", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"}}>
      <Box3 size={`${props.size * 0.9}`} />
    </div>
  )
}

export default Box2