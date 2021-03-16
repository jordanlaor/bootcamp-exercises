import React from "react";
import "./box.css";
class Box extends React.Component {
  render() {
    const style = { width: this.props.size, height: this.props.size };
    return <div className="box" style={style}></div>;
  }
}

export default Box;
