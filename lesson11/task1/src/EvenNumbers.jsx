import React from "react";

class EvenNumbers extends React.Component {
  shouldComponentUpdate(nextRpops) {
    return nextRpops.number % 2 === 0;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default EvenNumbers;
