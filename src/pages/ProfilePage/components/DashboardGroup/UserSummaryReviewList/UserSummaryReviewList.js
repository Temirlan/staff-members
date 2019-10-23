import React from "react";

const UserSummaryReviewList = props => {
  return (
    <ul class="boss-user-summary__review-list">
      <li class="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
        <span class="boss-user-summary__review-marked">
          {props.venue && props.venue.name}
        </span>
      </li>
    </ul>
  );
};

export default UserSummaryReviewList;
