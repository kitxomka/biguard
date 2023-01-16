import * as React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");
  }

    return (
      <div className="Header">
        <div className="logo-wrap">
          {/* <img src={logo}/> */}
        </div>
        <div className="logOutBtn-wrap">
          <button className="logOutBtn" onClick={() => logOut()}>Log Out</button>
        </div>
      </div>
    );
  }
  
  export default Header;