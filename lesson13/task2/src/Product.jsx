import React from "react";

const Product = ({ match }) => {
  return (
    <div className="product">{`Product is ${match.params.productId}`}</div>
  );
};

export default Product;
