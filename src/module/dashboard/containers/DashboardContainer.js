import React from "react";
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export const DashboardContainer = withRouter(Dashboard);
