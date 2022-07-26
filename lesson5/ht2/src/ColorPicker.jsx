import React from "react";

class ColorPicker extends React.Component {
  component(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="picker__title">Red</div>
        <div>
          <button className="picker__button picker__button_coral"></button>
          <button className="picker__button picker__button_aqua"></button>
          <button className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
