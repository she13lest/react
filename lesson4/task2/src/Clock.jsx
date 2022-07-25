import React, { Component } from "react";
import "./clock.scss";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(
    new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
  ).format("HH:mm::ss");
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      time: props.time,
    };

    setInterval(() => {
      this.setState({
        time: this.state.time,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.props.time}</div>
      </div>
    );
  }
}

export default getTimeWithOffset;
