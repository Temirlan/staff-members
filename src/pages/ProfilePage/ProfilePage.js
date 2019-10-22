import React from "react";

import Dashboard from "../../components/Dashboard/Dashboard";
import Content from "../../components/Content/Content";
import DashboardProfile from "./components/DashboardProfile/DashboardProfile";
import Flow from "./components/Flow/Flow";

const ProfilePage = props => {
  return (
    <div className="boss-page-main">
      <Dashboard>
        <DashboardProfile />
      </Dashboard>
      <Content>
        <Flow />
      </Content>
    </div>
  );
};

export default ProfilePage;
