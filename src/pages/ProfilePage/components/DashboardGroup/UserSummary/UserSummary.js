import React from "react";
import UserSummarySide from "../UserSummarySide/UserSummarySide";
import UserSummaryContent from "../UserSummaryContent/UserSummaryContent";

const UserSummary = props => {
  return (
    <div class="boss-page-dashboard__user-summary">
      <div class="boss-user-summary">
        <UserSummarySide />
        <UserSummaryContent />
      </div>
    </div>
  );
};

export default UserSummary;
