import React from "react";

class Dialog extends React.Component {
 

  render() {
    return (
      <div className="dialog">
    <div className="dialog__heading">
      <h4 className="dialog__title">Recommendation</h4>
      <button className="dialog__close-btn">+</button>
    </div>
    <div className="dialog__content">
      <!-- Dialog children -->
      <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
    </div>
  </div>
    );
  }
}

export default Dialog;
