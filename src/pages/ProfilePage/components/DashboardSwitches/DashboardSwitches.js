import React from "react";
import { Link } from "react-router-dom";

const DashboardSwitches = props => {
  return (
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
  );
};

export default DashboardSwitches;
