import React from "react";
import PropTypes from "prop-types";

const StaffMembersCount = props => {
  return (
    <div className="boss-page-main__count boss-page-main__count_space_large">
      <span className="boss-page-main__count-text">Showing</span>
      <span className="boss-page-main__count-text boss-page-main__count-text_marked">
        {props.count}
      </span>
      <span className="boss-page-main__count-text">of</span>
      <span className="boss-page-main__count-text boss-page-main__count-text_marked">
        {props.totalCount}
      </span>
    </div>
  );
};

StaffMembersCount.propTypes = {
  count: PropTypes.string,
  totalCount: PropTypes.string
};

export default StaffMembersCount;
