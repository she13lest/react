import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = ({ offset, location }) => {
  const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    const date = new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
    return moment(date).format("h:mm:ss A");
  };

  const [time, setTime] = useState(offset);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;

// const getTimeWithOffset = (offset) => {
// 	const currentTime = new Date();
// 	const utcOffset = currentTime.getTimezoneOffset() / 60;
// 	const date = new Date(
// 	  currentTime.setHours(currentTime.getHours() + offset + utcOffset)
// 	);
// 	return moment(date).format("h:mm:ss A");
//  };

//  class Clock extends React.Component {
// 	constructor(props) {
// 	  super(props);

// 	  this.state = {
// 		 location: props.location,
// 		 time: props.offset,
// 	  };
// 	}

// 	componentDidMount() {
// 	  this.interval = setInterval(() => {
// 		 this.setState({
// 			time: this.state.time,
// 		 });
// 	  }, 1000);
// 	}

// 	componentWillUnmount() {
// 	  clearInterval(this.interval);
// 	}

// 	render() {
// 	  return (
// 		 <div className="clock">
// 			<div className="clock__location">{this.state.location}</div>
// 			<div className="clock__time">{`${getTimeWithOffset(
// 			  this.state.time
// 			)}`}</div>
// 		 </div>
// 	  );
// 	}
//  }
