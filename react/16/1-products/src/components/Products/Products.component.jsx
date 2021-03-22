import React from "react";
import store from "../../ store";
import ProductDetail from "../ProductDetail/ProductDetail.component";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class Products extends React.Component {
  state = { store: null };

  componentDidMount() {
    this.setState({ store });
  }

  displayTitles = () => {
    return this.state.store.map((item) => (
      <button>
        <Link to={`/products/${item.id}`} key={item.id}>
          {item.title}
        </Link>
      </button>
    ));
  };

  render() {
    console.log(this.state.store);
    return <div className="products">{this.state.store && this.displayTitles()}</div>;
  }
}
