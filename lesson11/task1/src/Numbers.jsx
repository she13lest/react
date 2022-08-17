import React from "react";

class Numbers extends React.Component {
  shouldComponentUpdate(nextRpops) {
    if (
      this.props.number === nextRpops.number &&
      this.props.title === nextRpops.title
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <>
        <div className="number">
          <span className="number__title">{this.props.title}</span>
          <span className="number__value">{this.props.number}</span>
        </div>
      </>
    );
  }
}

export default Numbers;
