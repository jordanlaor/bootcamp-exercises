import React from "react";
export default class InputText extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" name={this.props.name} onChange={this.props.onChange} value={this.props.value} />
      </div>
    );
  }
}
