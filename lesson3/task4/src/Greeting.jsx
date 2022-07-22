import React from "react";
import moment from "moment";

const Greeting = (props) => {
  console.log(props);

  const years = moment(new Date()).diff(moment(props.birthDay));
  console.log(years);

  return (
    <div className="greeting">
      {`My name is ${props.name} ${props.surname}. I'm ${props.years} years old`}{" "}
    </div>
  );
};

export default Greeting;
