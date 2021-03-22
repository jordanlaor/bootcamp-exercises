import { BrowserRouter, Route, Link } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage.component";
import Header from "./components/Header/Header.component";
import Products from "./components/Products/Products.component";
import ProductDetail from "./components/ProductDetail/ProductDetail.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/products/" exact component={Products} />
      <Route path="/products/:id" exact component={ProductDetail} />
    </BrowserRouter>
  );
}

export default App;
