import React from "react";
import UserSummarySideContainer from "../../../containers/UserSummarySideContainer";
import UserSummaryContentContainer from "../../../containers/UserSummaryContentContainer";

const UserSummary = props => {
  return (
    <div className="boss-page-dashboard__user-summary">
      <div className="boss-user-summary">
        <UserSummarySideContainer />
        <UserSummaryContentContainer />
      </div>
    </div>
  );
};

export default UserSummary;
