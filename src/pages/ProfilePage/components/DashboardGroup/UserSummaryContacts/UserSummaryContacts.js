import React from "react";

const UserSummaryContacts = props => {
  return (
    <div class="boss-user-summary__contacts">
      <a
        href="mailto:trulla.collier@yahoo.com"
        class="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
      >
        trulla.collier@yahoo.com
      </a>
      <a
        href="tel:123342342"
        class="boss-user-summary__link boss-user-summary__link_role_phone"
      >
        +123 342 342
      </a>
    </div>
  );
};

export default UserSummaryContacts;
