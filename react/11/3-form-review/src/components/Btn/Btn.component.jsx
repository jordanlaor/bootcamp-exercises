import React from "react";
export default class Btn extends React.Component {
  state = {};
  render() {
    return (
      <button type="submit" onClick={this.props.handleClick}>
        {this.props.name}
      </button>
    );
    //  <button type="submit" value={this.props.name} onSubmit={this.props.handleSubmit} />;
  }
}
