import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #508adf 0% 0% no-repeat padding-box;
  margin-top: 7px;
  width: 160px;
  height: 44px;
  border: none;
  color: white;
  border-radius: 36px;
  opacity: 1;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  font-family: Exo, Black;
`;


const Button = ({ text, btnFunction }) => {
  return (
    <StyledButton onClick={btnFunction}>
      {text}
    </StyledButton>
  );
};

export default Button;
