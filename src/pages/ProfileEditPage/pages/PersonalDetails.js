import React from "react";
import { connect } from "react-redux";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import PersonalDetailsForm from "../components/PersonalDetailsForm";

import * as s from "../../../redux/selectors";
import * as a from "../../../redux/actions";

const PersonalDetails = props => {
  const { staffMember, genderValues, onUpdatePersonalDetails } = props;

  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="personal"
    >
      <ContentSwitcherHeader title="Personal Details" />
      <div className="boss-content-switcher__content">
        <PersonalDetailsForm
          staffMember={staffMember}
          onSubmit={onUpdatePersonalDetails}
          genderValues={genderValues}
        />
      </div>
    </article>
  );
};

const mapStateToProps = state => {
  return {
    staffMember: s.staffMemberSelector(state),
    genderValues: s.getGenderValues(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePersonalDetails: values => {
      return dispatch(a.updatePersonalDetails(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalDetails);
