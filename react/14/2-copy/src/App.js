import React from "react";
import "./App.css";

class App extends React.Component {
  inputRef = React.createRef();
  copy = () => {
    this.inputRef.current.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10" ref={this.inputRef}></textarea>
        <button onClick={this.copy}>Copy!!</button>
      </div>
    );
  }
}

export default App;
