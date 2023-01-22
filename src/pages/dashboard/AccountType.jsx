import React from 'react';
import { useSelector } from "react-redux";

const AccountType = () => {
  const userData = useSelector((state) => state.app.userData);

  return (
    <div className='accountTypeWrapper'>
        <div className="accountTypeIcon"/>
        <div className="accountTypeText">{userData.type}</div>
    </div>
  )
}

export default AccountType;