import React from "react";
import { connect } from "react-redux";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import EmploymentDetailsForm from "../components/EmploymentDetailsForm";

import * as s from "../../../redux/selectors";
import * as a from "../../../redux/actions";

const EmploymentDetails = props => {
  const { staffMember, payRates, staffTypes, venues } = props;

  return (
    <article
      className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
      data-chapter="employment"
    >
      <ContentSwitcherHeader title="Employment Details" />
      <div className="boss-content-switcher__content">
        <EmploymentDetailsForm
          payRates={payRates}
          staffTypes={staffTypes}
          venues={venues}
          onSubmit={props.onUpdateEmploymentDeatails}
          staffMember={staffMember}
        />
      </div>
    </article>
  );
};

const mapStateToProps = state => {
  return {
    staffMember: s.getStaffMember(state),
    payRates: s.payRatesSelector(state),
    venues: s.venuesSelector(state),
    staffTypes: s.staffTypesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateEmploymentDeatails: values => {
      return dispatch(a.updateEmploymentDeatails(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmploymentDetails);
