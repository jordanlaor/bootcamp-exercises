import React from "react";
import Joke from "./components/Joke/Joke.component";
import Btn from "./components/Btn/Btn.component";
import "./App.css";
import ChuckApi from "./api/Chuck.api";

class App extends React.Component {
  state = { category: "", btns: [], areBtnsReady: false, shouldJokeUpdate: false };

  btnsHandler = (event) => {
    this.setState({ category: event.target.value, shouldJokeUpdate: true }, () => this.setState({ shouldJokeUpdate: false }));
  };

  createBtnCategories = async () => {
    const categories = (await ChuckApi("categories")).data;
    const btns = categories.map((item) => ({ value: item, btnText: item }));
    btns.unshift({ value: "", btnText: "random" });
    this.setState({ btns, areBtnsReady: true });
  };

  drawBtns = () => {
    return this.state.btns.map((btn) => <Btn handleBtnClick={this.btnsHandler} btnText={btn.btnText} value={btn.value} />);
  };

  componentDidMount() {
    this.createBtnCategories();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Joke category={this.state.category} shouldJokeUpdate={this.state.shouldJokeUpdate} />
        {this.state.areBtnsReady && this.drawBtns()}
      </div>
    );
  }
}

export default App;
