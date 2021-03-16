import React from "react";
import "./spinner.css";
class Spinner extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
export default Spinner;
