import React from "react";
import Dashboard from "../../../components/Dashboard/Dashboard";

const StaffMembersDashboard = props => {
  const { title, count } = props;

  function getCount() {
    if (count === 0) {
      return "0";
    }
    return `+${count}`;
  }

  return (
    <Dashboard>
      <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
        <div className="boss-page-dashboard__group">
          <h1 className="boss-page-dashboard__title">
            <span className="boss-page-dashboard__title-text">{title}</span>
            <span className="boss-page-dashboard__title-info">
              {getCount()}
            </span>
          </h1>
        </div>
      </div>
    </Dashboard>
  );
};

export default StaffMembersDashboard;
