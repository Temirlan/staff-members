import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "../../../components/Dashboard/Dashboard";
import DashboardUserSummaryContent from "./DashboardUserSummaryContent";
import DashboardUserSummarySide from "./DashboardUserSummarySide";

const DashboardUserSummary = props => {
  return (
    <div className="boss-page-dashboard__user-summary">
      <div className="boss-user-summary">{props.children}</div>
    </div>
  );
};

const ProfilePageDashboard = props => {
  return (
    <Dashboard>
      <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
        <div className="boss-page-dashboard__group">
          <DashboardUserSummary>
            <DashboardUserSummarySide staffMember={props.staffMember} />
            <DashboardUserSummaryContent staffMember={props.staffMember} />
          </DashboardUserSummary>

          <div className="boss-page-dashboard__buttons-group">
            <Link
              to="#"
              className="boss-button boss-button_role_edit boss-page-dashboard__button"
            >
              Edit Profile
            </Link>
            <Link
              to="#"
              className="boss-button boss-button_role_block boss-page-dashboard__button"
            >
              Disable Staff Member
            </Link>
          </div>
        </div>

        <div className="boss-page-dashboard__switches">
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch"
          >
            Profile
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
          >
            Holidays
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch"
          >
            Owed hours
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
          >
            Accessories
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch"
          >
            Shifts
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch"
          >
            Payments
          </Link>
        </div>
      </div>
    </Dashboard>
  );
};

export default ProfilePageDashboard;
