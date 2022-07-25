import React from "react";

class Colors extends React.Component {
  render() {
    return (
      <div class="counter">
        <button data-action="decrease" class="counter__button">
          -
        </button>
        <span class="counter__value">0</span>
        <button data-action="increase" class="counter__button">
          +
        </button>
      </div>
    );
  }
}

export default Colors;
