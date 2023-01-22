import React from "react";
// import React, { useState } from "react";
import { useSelector } from "react-redux";


const Accounts = () => {
  // const [isActive, setIsActive] = useState("instagram");
  const isActive = 'instagram';

  const accountsData = useSelector((state) => state.app.userAccounts);

  return (
    <div className="accountsPanel">
      {accountsData.map((account, index) => (
        <div key={`${account.platform}${index}`} className="singleAccount">
          <div className={isActive === account.platform ? "active" : "accountWrap"}>
            {account.platform === "none" ? (
              <div className="noProfile">
                <span className="plassSign">+</span>
              </div>
            ) : (
              <>
                <div className="profilePhoto"/>
                <div className={`profileType ${account.platform}`} />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accounts;
