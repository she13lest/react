import React from "react";
import moment from "moment";

const Greeting = (props) => {
  // console.log(props);

  const years = moment(new Date()).diff(moment(props.birthDate), "years");
  console.log(years);

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${years} years old`}
    </div>
  );
};

export default Greeting;
