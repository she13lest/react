import React from "react";

const NumbersLisr = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersLisr;
