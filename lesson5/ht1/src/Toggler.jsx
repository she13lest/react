import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggler = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggler}>
        {this.state.active ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggler;
