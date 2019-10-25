import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter, Link } from "react-router-dom";

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
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/profile`}
            className="boss-button boss-button_type_small boss-button_role_profile boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Profile
          </NavLink>
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/holidays`}
            className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Holidays
          </NavLink>
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/owed_hours`}
            className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Owed hours
          </NavLink>
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/accessories`}
            className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Accessories
          </NavLink>
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/shifts`}
            className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Shifts
          </NavLink>
          <NavLink
            to={`/staff_members/${props.match.params.idUser}/payments`}
            className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch"
            activeClassName="boss-button_state_active"
          >
            Payments
          </NavLink>
        </div>
      </div>
    </Dashboard>
  );
};

DashboardUserSummary.propTypes = {
  children: PropTypes.array.isRequired
};

ProfilePageDashboard.propTypes = {
  staffMember: PropTypes.object
};

export default withRouter(ProfilePageDashboard);
