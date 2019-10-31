import React from "react";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import EmploymentDetailsForm from "../components/EmploymentDetailsForm";

const EmploymentDetails = props => {
  const {
    staffMember: { statusStatement },
    payRates,
    staffTypes,
    venues
  } = props;

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
          initialValues={{ statusStatement }}
        />
      </div>
    </article>
  );
};

export default EmploymentDetails;
