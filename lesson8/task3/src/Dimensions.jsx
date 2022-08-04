import React from "react";

class Dimensions extends React.Component {
  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };

    document.title = `${innerWidth} x ${innerHeight}`;
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;

    this.setState({
      width: innerWidth,
      height: innerHeight,
    });

    document.title = `${innerWidth} x ${innerHeight}`;
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;
