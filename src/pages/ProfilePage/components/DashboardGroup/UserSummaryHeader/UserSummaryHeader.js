import React from "react";

const UserSummaryHeader = props => {
  return (
    <div className="boss-user-summary__header">
      <h2 className="boss-user-summary__name">{props.fullName}</h2>
    </div>
  );
};

export default UserSummaryHeader;
