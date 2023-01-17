import React from "react";
import Account from "./Account";
import LoadMore from "./LoadMore";
import ProfileIcon from "./ProfileIcon";
import ProgressBar from "./ProgressBar";
import RecentProblems from "./RecentProblems";
import SecurityChecklist from "./SecurityChecklist";
import UserData from "./UserData";
import Vip from "./Vip";

const MainDashboard = () => {
  return (
    <div className="main">
      <Account />
      <ProfileIcon />
      <UserData />
      <ProgressBar />
      <Vip />
      <SecurityChecklist />
      <LoadMore />
      <RecentProblems/>
    </div>
  );
};

export default MainDashboard;
