import React from "react";

const CartTitle = ({ userName, count }) => {
  return <div className="cart-title">{`${userName}, you added ${count}`}</div>;
};

export default CartTitle;
