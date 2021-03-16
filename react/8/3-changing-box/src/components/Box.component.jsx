import React from "react";
import "./box.css";
class Box extends React.Component {
  state = { color: "green", counter: 0 };
  changeColor = this.changeColor.bind(this);
  componentDidMount() {
    setInterval(this.changeColor, 500);
  }
  changeColor() {
    const colors = ["green", "blue", "purple", "red", "orange", "yellow"];
    this.setState((prevState, prevProp) => {
      return { counter: prevState.counter + 1, color: colors[(prevState.counter + 1) % colors.length] };
    });
  }
  render() {
    const style = { background: this.state.color };
    return <div className={`${this.state.counter > 5 ? "box round" : "box"}`} style={style}></div>;
  }
}

export default Box;
