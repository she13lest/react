import React from "react";

class Expand extends React.Component {
  state = {
    isExpanded: false,
  };

  handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.handleToggle} className="expand__toggle-btn">
            {this.state.isExpanded ? (
              <i className="fas fa-chevron-up">↟</i>
            ) : (
              <i className="fas fa-chevron-down">↡</i>
            )}
          </button>
        </div>
        <div className="expand__content">
          {this.state.isExpanded ? this.props.children : ""}
        </div>
      </div>
    );
  }
}

export default Expand;
