import React from "react";
import UserSummary from "./UserSummary/UserSummary";

const DashboardGroup = props => {
  return (
    <div class="boss-page-dashboard__group">
      <UserSummary />
      <div class="boss-page-dashboard__buttons-group">
        <a
          href="#"
          class="boss-button boss-button_role_edit boss-page-dashboard__button"
        >
          Edit Profile
        </a>
        <a
          href="#"
          class="boss-button boss-button_role_block boss-page-dashboard__button"
        >
          Disable Staff Member
        </a>
      </div>
    </div>
  );
};

export default DashboardGroup;
