import { React, forwardRef } from "react";
export default forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});
