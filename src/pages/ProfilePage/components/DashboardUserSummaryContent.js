import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserSummaryHeader = props => {
  return (
    <div className="boss-user-summary__header">
      <h2 className="boss-user-summary__name">{props.fullName}</h2>
    </div>
  );
};

const UserSummaryReviewList = props => {
  return (
    <ul className="boss-user-summary__review-list">
      <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
        <span className="boss-user-summary__review-marked">
          {props.venue && props.venue.name}
        </span>
      </li>
    </ul>
  );
};

const UserSummaryContacts = props => {
  return (
    <div className="boss-user-summary__contacts">
      <Link
        to={`mailto:${props.email}`}
        className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
      >
        {props.email && props.email}
      </Link>
      <Link
        to={`tel:${props.phoneNumber}`}
        className="boss-user-summary__link boss-user-summary__link_role_phone"
      >
        {props.phoneNumber && props.phoneNumber}
      </Link>
    </div>
  );
};

const DashboardUserSummaryContent = props => {
  return (
    <div className="boss-user-summary__content">
      <UserSummaryHeader fullName={props.staffMember.fullName} />

      <UserSummaryReviewList venue={props.staffMember.venue} />

      <UserSummaryContacts
        email={props.staffMember.email}
        phoneNumber={props.staffMember.phoneNumber}
      />
    </div>
  );
};

UserSummaryHeader.propTypes = {
  fullName: PropTypes.string.isRequired
};

UserSummaryReviewList.propTypes = {
  venue: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
};

UserSummaryContacts.propTypes = {
  email: PropTypes.string,
  phoneNumber: PropTypes.string
};

DashboardUserSummaryContent.propTypes = {
  staffMember: PropTypes.object
};

export default DashboardUserSummaryContent;
