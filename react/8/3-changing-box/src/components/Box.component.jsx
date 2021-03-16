import React from "react";
import "./box.css";
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "", counter: 0 };
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    setInterval(this.changeColor, 500);
  }
  changeColor() {
    const colors = ["green", "blue", "purple", "red", "orange", "yellow"];
    this.setState((prevState, prevProp) => {
      console.log(prevState.counter + 1);
      return { counter: prevState.counter + 1, color: colors[(prevState.counter + 1) % 6] };
    });
  }
  render() {
    const style = { background: this.state.color };
    return <div className={`${this.state.counter > 5 ? "box round" : "box"}`} style={style}></div>;
  }
}

export default Box;
