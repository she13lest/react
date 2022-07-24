import React from "react";
import moment from "moment";

const Profile = (props) => {
  const birthDay = moment(props.userData.birthDate).format("DD MMM YY");
  console.log(birthDay);

  return (
    <div className="profile">
      <p class="profile__name">
        {` ${props.userData.firstName} ${props.userData.lastName}.`}
      </p>
      <p class="profile__birth">{`Was born ${birthDay} in ${props.userData.birthPlace}.`}</p>
    </div>
  );
};

export default Profile;
