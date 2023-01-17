import React from "react";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {

    const navigate = useNavigate();

    return (
      <div className="CreateAccount">
        <p>CreateAccount</p>
        <button onClick={()=>navigate("/dashboard")}>Go to the Dashboard</button>
      </div>
    );
  }
  
  export default CreateAccount;