import React from "react";
import moment from "moment";

const Profile = (props) => {
  const birthDay = moment(props.userData.birthDate).format("DD MMM YY");
  console.log(birthDay);

  return (
    <div className="profile">
      {` ${props.userData.firstName} ${props.userData.lastName}. Was born ${birthDay} in ${props.userData.birthPlace}.`}
    </div>
  );
};

export default Profile;
