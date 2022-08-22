import React from "react";
import { Link } from "react-router-dom";

const Product = ({...rest}) => {
  render() {
    return (
      <div className="product">
        <Link to="/products"></Link>
      </div>
    );
  }
}

export default Product;
