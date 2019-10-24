import React from "react";

const UserSummaryReviewList = props => {
  return (
    <ul className="boss-user-summary__review-list">
      <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
        <span className="boss-user-summary__review-marked">
          {props.venue && props.venue.name}
        </span>
      </li>
    </ul>
  );
};

export default UserSummaryReviewList;
