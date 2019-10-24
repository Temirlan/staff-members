import React from "react";

const UserSummaryContacts = props => {
  return (
    <div className="boss-user-summary__contacts">
      <a
        href="mailto:trulla.collier@yahoo.com"
        className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
      >
        {props.email && props.email}
      </a>
      <a
        href="tel:123342342"
        className="boss-user-summary__link boss-user-summary__link_role_phone"
      >
        {props.phoneNumber && props.phoneNumber}
      </a>
    </div>
  );
};

export default UserSummaryContacts;
