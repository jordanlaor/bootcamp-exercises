import React from "react";
import ChuckApi from "../../api/Chuck.api";

export default class Joke extends React.Component {
  state = { isJokeReady: false, joke: "" };
  componentDidMount() {
    this.getAJoke();
  }

  componentDidUpdate() {
    this.getAJoke();
  }

  getAJoke = async () => {
    const requestSpecification = this.props.category
      ? {
          params: { category: this.props.category },
        }
      : null;
    const joke = (await ChuckApi.get(`random`, requestSpecification)).data.value;
    // console.log(joke);
    this.setState({ joke });
  };

  shouldComponentUpdate() {
    return this.props.shouldJokeUpdate;
  }

  render() {
    // console.log("render joke");
    return <div className="joke">{this.state.joke}</div>;
  }
}
