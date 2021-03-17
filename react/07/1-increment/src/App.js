import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <button id="increment" onClick={this.incrementValue.bind(this)}>
          increment{" "}
        </button>
        <label htmlFor="increment"> {this.state.value}</label>
      </div>
    );
  }
}

export default App;
