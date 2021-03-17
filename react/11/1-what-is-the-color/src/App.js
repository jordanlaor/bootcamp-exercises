import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton.component";
import React from "react";

class App extends React.Component {
  state = { currentColor: "" };
  createButtons = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color) => <CustomButton color={color} handleClick={this.handleClick} />);
  };
  handleClick = (color) => {
    this.setState({ currentColor: color });
  };
  render() {
    return (
      <div>
        <div>{this.createButtons()}</div>
        <h1>The color selected is: {this.state.currentColor}</h1>
      </div>
    );
  }
}

export default App;
