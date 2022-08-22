import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            {" "}
            <Products />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
