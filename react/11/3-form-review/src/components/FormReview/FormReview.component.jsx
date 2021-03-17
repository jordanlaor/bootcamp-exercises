import React from "react";
import Btn from "../Btn/Btn.component";
export default class FormReview extends React.Component {
  state = { firstName: "", lastName: "", select: "", freeText: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")), () => console.log(localStorage));
  }

  render() {
    return (
      <div>
        <div>First Name: {this.state.firstName}</div>
        <div>Last Name: {this.state.lastName}</div>
        <div>Age: {this.state.select}</div>
        <div>Free Text: {this.state.freeText}</div>
        <Btn name="cancel" handleClick={this.props.handleCancel} />
        <Btn name="submit" handleClick={this.props.handleSubmit} />
      </div>
    );
  }
}
