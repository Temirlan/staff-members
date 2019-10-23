import React from "react";

const UserSummaryHeader = props => {
  return (
    <div class="boss-user-summary__header">
      <h2 class="boss-user-summary__name">{props.fullName}</h2>
    </div>
  );
};

export default UserSummaryHeader;
