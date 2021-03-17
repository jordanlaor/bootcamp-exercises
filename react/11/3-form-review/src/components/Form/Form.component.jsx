import React from "react";
import InputText from "../InputText/InputText.component";
import Select from "../Select/Select.component";
import FreeText from "../FreeText/FreeText.component";
import Btn from "../Btn/Btn.component";
export default class Form extends React.Component {
  state = { firstName: "", lastName: "", select: "", freeText: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")), () => console.log(localStorage));
  }

  componentWillUnmount() {
    // console.log(JSON.parse(localStorage.getItem("state")));
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={(e) => this.props.onContinue(e, this.state)}>
        <InputText name="firstName" label="First Name: " onChange={this.handleChange} value={this.state.firstName} />
        <InputText name="lastName" label="Last Name: " onChange={this.handleChange} value={this.state.lastName} />
        <Select
          name="select"
          options={["under 13", "13-18", "over 18"]}
          label="Age: "
          onChange={this.handleChange}
          value={this.state.select}
        />
        <FreeText name="freeText" label="Free Text: " onChange={this.handleChange} value={this.state.freeText} />
        <Btn name="continue" handleClick={(e) => this.props.onContinue(e, this.state)} />
      </form>
    );
  }
}
