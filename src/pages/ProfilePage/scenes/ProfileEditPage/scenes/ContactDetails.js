import React from "react";
import { connect } from "react-redux";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import ContactDetailsForm from "../components/ContactDetailsForm";

import * as s from "../../../../../redux/selectors";
import * as a from "../../../../../redux/actions";

const ContactDetails = props => {
  const { staffMember, onUpdateContactDetails } = props;

  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="contact"
    >
      <ContentSwitcherHeader title="Contact Details" />
      <div className="boss-content-switcher__content">
        <ContactDetailsForm
          staffMember={staffMember}
          onSubmit={onUpdateContactDetails}
        />
      </div>
    </article>
  );
};

const mapStateToProps = state => {
  return {
    staffMember: s.staffMemberSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateContactDetails: values => {
      return dispatch(a.updateContactDetails(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetails);
