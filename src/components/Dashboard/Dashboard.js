import React from "react";

const Dashboard = props => {
  return (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">{props.children}</div>
    </div>
  );
};

export default Dashboard;
