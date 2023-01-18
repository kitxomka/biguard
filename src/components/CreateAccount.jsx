import React from "react";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {

    const navigate = useNavigate();

    return (
      <div className="CreateAccount">
        <p>Create Account</p>
        <button className="goToDashboard" onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>
      </div>
    );
  }
  
  export default CreateAccount;