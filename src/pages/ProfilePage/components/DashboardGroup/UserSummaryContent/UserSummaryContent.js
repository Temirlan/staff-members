import React from "react";

const UserSummaryContent = props => {
  const renderUserSummary = render => {
    return React.cloneElement(render());
  };

  return (
    <div class="boss-user-summary__content">
      {renderUserSummary(props.renderUserSummaryHeader)}
      {renderUserSummary(props.renderUserSummaryReviewList)}
      {renderUserSummary(props.renderUserSummaryContacts)}
    </div>
  );
};

export default UserSummaryContent;
