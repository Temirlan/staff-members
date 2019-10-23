import React from "react";
import UserSummarySideContainer from "../../../containers/UserSummarySideContainer";
import UserSummaryContentContainer from "../../../containers/UserSummaryContentContainer";

const UserSummary = props => {
  return (
    <div class="boss-page-dashboard__user-summary">
      <div class="boss-user-summary">
        <UserSummarySideContainer />
        <UserSummaryContentContainer />
      </div>
    </div>
  );
};

export default UserSummary;
