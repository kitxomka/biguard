import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #508adf;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 20rem auto;
`;

const Loader = () => {
  return <StyledLoader/>;
};

export default Loader;
