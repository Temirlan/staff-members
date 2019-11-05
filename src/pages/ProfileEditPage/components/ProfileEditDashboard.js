import React from "react";
import { Link, withRouter } from "react-router-dom";
import Dashboard from "../../../components/Dashboard/Dashboard";

const ProfileEditDashboard = props => {
  return (
    <Dashboard>
      <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile-edit">
        <div className="boss-page-dashboard__group">
          <h1 className="boss-page-dashboard__title">{props.title}</h1>
          <div className="boss-page-dashboard__buttons-group boss-page-dashboard__buttons-group_position_last">
            <Link
              to={`/staff_members/${props.match.params.idUser}`}
              className="boss-button boss-button_role_cancel boss-page-dashboard__button"
            >
              {props.editCancel}
            </Link>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default withRouter(ProfileEditDashboard);
