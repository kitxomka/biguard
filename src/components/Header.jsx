import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [urlElement, setUrlElement] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let urlElements = window.location.href.split("/");
    setUrlElement(urlElements[3]);
  });

  return (
    <div className="Header">
      <div className="logo-wrap"></div>
      {urlElement ? (
        <div className="logOutBtn-wrap">
          <button className="logOutBtn" onClick={() => navigate("/")}>
            Log Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
