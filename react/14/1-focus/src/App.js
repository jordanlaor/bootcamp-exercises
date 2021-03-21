import React from "react";
import "./App.css";

class App extends React.Component {
  inputRef = React.createRef();
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
}

export default App;
