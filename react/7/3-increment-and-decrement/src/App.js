import React from "react";
import "./App.css";
// import "./button.css";
import Button from "./components/Button/Button.component";
// class Button extends React.Component {
//   render() {
//     return <button onClick={this.props.action}>{this.props.text}</button>;
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increase() {
    this.state.counter < 10 && this.setState({ counter: this.state.counter + 1 });
  }

  decrease() {
    this.state.counter > -10 && this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <Button action={this.increase.bind(this)} text="+" />
        <div
          className="number"
          style={(this.state.counter < 0 && { color: "red" }) || (this.state.counter > 0 && { color: "green" }) || { color: "black" }}
        >
          {this.state.counter}
        </div>
        <Button action={this.decrease.bind(this)} text="-" />
      </div>
    );
  }
}

export default App;
