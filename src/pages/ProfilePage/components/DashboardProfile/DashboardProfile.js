import React from "react";
import DashboardGroup from "../DashboardGroup/DashboardGroup";
import DashboardSwitches from "../DashboardSwitches/DashboardSwitches";

const DashboardProfile = props => {
  return (
    <div class="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
      <DashboardGroup />
      <DashboardSwitches />
    </div>
  );
};

export default DashboardProfile;
