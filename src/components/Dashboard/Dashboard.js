import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";
import Button from "../Button/Button";

const Dashboard = props => {
  return (
    <div className="staff-members-page__dashboard">
      <div className="staff-members-page__inner">
        <div className="staff-members-page-dashboard staff-members-page-dashboard_updated staff-members-page-dashboard_page_staff-members-index">
          <div className="staff-members-page-dashboard__group">
            <h1 className="staff-members-page-dashboard__title">
              <span className="staff-members-page-dashboard__title-text">
                Staff Members
              </span>
              <span className="staff-members-page-dashboard__title-info">
                +695
              </span>
            </h1>
            <div className="staff-members-page-dashboard__buttons-group">
              <Button className="boss-button">
                <FontAwesomeIcon className="boss-button__add" icon={faPlus} />
                Add Staff Members
              </Button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
