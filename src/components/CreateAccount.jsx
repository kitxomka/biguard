import * as React from "react";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    }

    return (
      <div className="CreateAccount">
        <p>CreateAccount</p>
        <button onClick={goToDashboard}>Go to the Dashboard</button>
      </div>
    );
  }
  
  export default CreateAccount;