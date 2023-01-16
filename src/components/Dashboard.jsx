import * as React from "react";

import SidePanel from '../components/SidePanel';
import MainDashboard from './MainDashboard';


const Dashboard = () => {
    return (
      <div className="Dashboard">
        <SidePanel />
        <MainDashboard />
      </div>
    );
  }
  
  export default Dashboard;