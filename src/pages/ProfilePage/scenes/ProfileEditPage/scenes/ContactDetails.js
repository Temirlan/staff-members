import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import * as constants from "../../../../../consts";
import ContactDetailsForm from "../components/ContactDetailsForm";

const ContactDetails = props => {
  const handleSubmit = values => {
    return props.onUpdateContactDetails(values).then(values => {
      if (values.statusCode === 422) {
        return values;
      }

      if (values.statusCode === 200) {
        props.history.push(
          `${constants.PATH_STAFF_MEMBERS}/${props.match.params.idUser}`
        );
      }
    });
  };

  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="contact"
    >
      <ContentSwitcherHeader title="Contact Details" />
      <div className="boss-content-switcher__content">
        <Form onSubmit={handleSubmit} component={ContactDetailsForm} />
      </div>
    </article>
  );
};

export default withRouter(ContactDetails);
