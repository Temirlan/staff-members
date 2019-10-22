import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Content from "../../components/Content/Content";
import DashboardTitle from "./components/DashboardTitle/DashboardTitle";
import StaffMembersTable from "./components/StaffMembersTable/StaffMembersTable";
import StaffMembersCount from "./components/StaffMembersCount/StaffMembersCount";

const StaffMembersPage = props => {
  return (
    <div className="boss-page-main">
      <Dashboard>
        <DashboardTitle />
      </Dashboard>
      <Content>
        <StaffMembersTable />
        <StaffMembersCount />
      </Content>
    </div>
  );
};

export default StaffMembersPage;
