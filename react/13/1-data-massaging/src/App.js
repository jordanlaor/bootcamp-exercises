import React from "react";
import utility from "./utility";
import data from "./ data";
import Name from "./components/Name.component";
import Card from "./components/Card.component";
import "./App.css";

class App extends React.Component {
  state = {
    names: [],
    before1990: [],
    isDataFilterd: false,
  };

  componentDidMount() {
    this.setState({ names: utility.getNames(data), before1990: utility.before1990(data), isDataFilterd: true });
  }

  drawNames = () => {
    return (
      <div key="names" className="names">
        {this.state.names.map((name, index) => {
          return <Name id={index + 1} name={name} />;
        })}
      </div>
    );
  };

  drawCards = () => {
    return (
      <div key="cards" className="cards">
        {this.state.before1990.map((item, index) => {
          return <Card id={index} item={item} />;
        })}
      </div>
    );
  };

  drawData = () => {
    return (
      <div>
        {this.drawNames()}
        {this.drawCards()}
      </div>
    );
  };

  render() {
    return <div>{this.state.isDataFilterd && this.drawData()}</div>;
  }
}

export default App;
