import React from "react";
import { useSelector } from "react-redux";

const UserData = () => {
  const userData = useSelector((state) => state.app.userData);

  return (
    <div className="userData">
        <div className="name">{userData.name}</div>
        <div className="followers">{userData.followers} followers</div>
    </div>
  )
};

export default UserData;
