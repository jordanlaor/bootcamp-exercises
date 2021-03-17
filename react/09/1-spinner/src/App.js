import "./App.css";
import React from "react";
import Spinner from "./components/Spinner/Spinner.component";

class App extends React.Component {
  state = { isSpinner: true };
  turnOff = () => {
    this.setState({ isSpinner: false });
  };
  componentDidMount() {
    setTimeout(this.turnOff, 3000);
  }
  drawSpinner = () => {
    if (this.state.isSpinner) {
      return <Spinner />;
    }
  };
  render() {
    return <div>{this.drawSpinner()}</div>;
  }
}

export default App;
