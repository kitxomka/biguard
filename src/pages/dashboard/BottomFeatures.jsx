import React from "react";

const BottomFeatures = () => {

  const bottomFeaturesClick = () => {
    alert('You clicked on one of the bottom features')
  }

  return (
    <div className="bottom-features">
      <div className="chatWrap">
        <div className="chat" onClick={bottomFeaturesClick}>
            <div className="chatIcon"/>
        </div>
        <div className="chatText">Chat with us</div>
      </div>
      <div className="settingWrap">
        <div className="settings" onClick={bottomFeaturesClick}>
            <div className="settingsIcon"/>
        </div>
        <div className="settingsText">Settings</div>
      </div>
    </div>

  );
};

export default BottomFeatures;
