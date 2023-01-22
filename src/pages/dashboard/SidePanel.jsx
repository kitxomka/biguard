import React from "react";
import BottomFeatures from "./BottomFeatures";
import TopFeatures from "./TopFeatures";
import styled from "styled-components";

const StyledSidePanel = styled.div``;

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <TopFeatures />
      <BottomFeatures />
    </div>
  );
};

export default SidePanel;
