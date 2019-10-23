import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Content from "../../components/Content/Content";
import StaffMembersCount from "./components/StaffMembersCount/StaffMembersCount";
import StaffMembersTableContainer from "./containers/StaffMembersTableContainer";
import DashboardTitle from "./components/DashboardTitle/DashboardTitle";

const StaffMembersPage = props => {
  return (
    <div className="boss-page-main">
      <Dashboard>
        <DashboardTitle />
      </Dashboard>
      <Content>
        <StaffMembersTableContainer />
        <StaffMembersCount />
      </Content>
    </div>
  );
};

export default StaffMembersPage;
