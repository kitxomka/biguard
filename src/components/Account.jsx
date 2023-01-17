import React from "react";

const Account = () => {
  const accountsData = [
    { type: "instagram" },
    { type: "facebook" },
    { type: "none" },
    { type: "none" },
  ];

  return (
    <div className="accountsPanel">
      {accountsData.map((account, index) => (
        <div key={`${account.type}${index}`} className="singleAccount">
          {account.type}
        </div>
      ))}
    </div>
  );
};

export default Account;
