import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, getSecurityData } from "../features/appSlice";

import SidePanel from "../components/SidePanel";
import MainDashboard from "./MainDashboard";

import { userData, securityData } from "../images/data";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserData();
    dispatch(getSecurityData(securityData));
  });

  const fetchUserData = () => {
    const options = {
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users`,
    };

    axios.request(options).then((response) => {
      // console.log("response", response);
      // console.log("userData", userData);
      dispatch(getUserData(userData));
    });
  };



  return (
    <div className="Dashboard">
      <SidePanel />
      <MainDashboard />
    </div>
  );
};

export default Dashboard;
