import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Content from "../../components/Content/Content";
import StaffMembersCount from "./components/StaffMembersCount/StaffMembersCount";
import DashboardTitleContainer from "./containers/DashboardTitleContainer";
import StaffMembersTableContainer from "./containers/StaffMembersTableContainer";

const StaffMembersPage = props => {
  return (
    <div className="boss-page-main">
      <Dashboard>
        <DashboardTitleContainer />
      </Dashboard>
      <Content>
        <StaffMembersTableContainer />
        <StaffMembersCount />
      </Content>
    </div>
  );
};

export default StaffMembersPage;
