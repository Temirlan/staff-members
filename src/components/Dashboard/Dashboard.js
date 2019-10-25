import React from "react";
import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <div className="boss-page-main__dashboard">
      <div className="boss-page-main__inner">{props.children}</div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.element.isRequired
};

export default Dashboard;
