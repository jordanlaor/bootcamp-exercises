import Form from "./components/Form/Form.component";
import FormReview from "./components/FormReview/FormReview.component";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = { showForm: true };
  handleContinue = (e) => {
    e.preventDefault();
    this.setState({ showForm: false });
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.setState({ showForm: true });
  };
  handleSubmit = (e) => {
    alert("submitted");
  };
  render() {
    return this.state.showForm ? (
      <Form onContinue={this.handleContinue} />
    ) : (
      <FormReview handleCancel={this.handleCancel} handleSubmit={this.handleSubmit} />
    );
  }
}

export default App;
