import React from "react";
import "./container.css";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  handleClick = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick.bind(this)}>Show / Hide</button>
        {!this.state.isHidden && <div className="box"></div>}
      </div>
    );
  }
}

export default Container;
