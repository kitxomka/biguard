import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 77px;
  border-bottom: 2px solid #7ba6e6;
`;

const Header = () => {
  const [urlElement, setUrlElement] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let urlElements = window.location.href.split("/");
    setUrlElement(urlElements[3]);
  });

  const logOut = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <div className="logo-wrap" />
      {urlElement ? (
        <div className="logOutBtn-wrap">
          <Button
            text={"Log Out"}
            btnFunction={logOut}
          />
        </div>
      ) : null}
    </StyledHeader>
  );
};

export default Header;
