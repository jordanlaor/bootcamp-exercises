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
          return (
            <React.Fragment key={index}>
              <Name name={name} />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  drawCards = () => {
    return (
      <div key="cards" className="cards">
        {this.state.before1990.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card item={item} />
            </React.Fragment>
          );
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
