import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserData, getSecurityData } from "../../features/appSlice";
import styled from "styled-components";

import SidePanel from "./SidePanel";
import MainDashboard from "./MainDashboard";

import { userData, securityData } from "../../images/data";
import Loader from "../../components/Loader";

const StyledDashboard = styled.div`
  width: 1920px;
  height: 1442px;
`;

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      fetchUserData();
      dispatch(getSecurityData(securityData));
    }, 1000);
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
    <StyledDashboard>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SidePanel />
          <MainDashboard />
        </>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
