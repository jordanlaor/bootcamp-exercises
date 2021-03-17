import React from "react";
import "./App.css";

class App extends React.Component {
  state = { favoriteColor: "orange" };
  someIdRef = React.createRef();

  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "blue" }), 1000);
  }

  componentDidUpdate() {
    this.someIdRef.current.textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="someId" ref={this.someIdRef}></div>
      </div>
    );
  }
}

export default App;
