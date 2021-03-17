import React from "react";
export default class FreeText extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <textarea name={this.props.name} onChange={this.props.onChange} value={this.props.value} cols="30" rows="10"></textarea>
      </div>
    );
  }
}
