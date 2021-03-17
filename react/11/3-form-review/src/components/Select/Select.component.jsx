import React from "react";
export default class Select extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select onChange={this.props.onChange} value={this.props.value} name={this.props.name}>
          {this.props.options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}
