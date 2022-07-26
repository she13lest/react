import React from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeColor: null,
    };
  }

  setTitle = (title) => {
    this.setState({
      activeColor: title,
    });
  };

  clearTitle = () => {
    this.setState({
      activeColor: null,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.activeColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle("Coral")}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle("Aqua")}
            onMouseLeave={() => this.clearTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle("Bisque")}
            onMouseLeave={() => this.clearTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
