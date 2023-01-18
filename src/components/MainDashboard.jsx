import React from "react";
import Accounts from "./Accounts";
import LoadMore from "./LoadMore";
import ProfileIcon from "./ProfileIcon";
import ProgressBar from "./ProgressBar";
import RecentProblems from "./RecentProblems";
import SecurityChecklist from "./SecurityChecklist";
import UserData from "./UserData";
import VipIcon from "./VipIcon";

const MainDashboard = () => {
  return (
    <div className="main">
      <Accounts />
      <ProfileIcon />
      <UserData />
      <ProgressBar />
      <VipIcon />
      <SecurityChecklist />
      <LoadMore />
      <RecentProblems/>
    </div>
  );
};

export default MainDashboard;
