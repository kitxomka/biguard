import React from "react";
import BottomFeatures from "./BottomFeatures";
import TopFeatures from "./TopFeatures";

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <TopFeatures />
      <BottomFeatures />
    </div>
  );
};

export default SidePanel;
