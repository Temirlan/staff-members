import React from "react";
import UserSummaryHeader from "../UserSummaryHeader/UserSummaryHeader";
import UserSummaryReviewList from "../UserSummaryReviewList/UserSummaryReviewList";
import UserSummaryContacts from "../UserSummaryContacts/UserSummaryContacts";

const UserSummaryContent = props => {
  return (
    <div class="boss-user-summary__content">
      <UserSummaryHeader />

      <UserSummaryReviewList />

      <UserSummaryContacts />
    </div>
  );
};

export default UserSummaryContent;
