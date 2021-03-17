import React from "react";
import "./costumButton.css";
export default class CustomButton extends React.Component {
  render() {
    return (
      <button className={this.props.color} onClick={() => this.props.handleClick(this.props.color)}>
        <h2>{this.props.color}</h2>
      </button>
    );
  }
}
