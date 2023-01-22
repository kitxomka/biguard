import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styled from "styled-components";

const StyledCreateAccount = styled.div`
  text-align: center;
`;

const CreateAccount = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  }


  return (
    <StyledCreateAccount>
      <p>Create Account</p>
      <Button text={'Go to Dashboard'} btnFunction={goToDashboard}/>
    </StyledCreateAccount>
  );
};

export default CreateAccount;
