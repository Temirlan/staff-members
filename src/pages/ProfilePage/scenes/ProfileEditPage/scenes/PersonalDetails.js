import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import { PATH_STAFF_MEMBERS } from "../../../../../consts";
import PersonalDetailsForm from "../components/PersonalDetailsForm";

const PersonalDetails = props => {
  const handleSubmit = values => {
    return props.onUpdatePersonalDetails(values).then(values => {
      if (values.statusCode === 400) {
        return values;
      }

      if (values.statusCode === 200) {
        props.history.push(
          `${PATH_STAFF_MEMBERS}/${props.match.params.idUser}`
        );
      }
    });
  };

  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="personal"
    >
      <ContentSwitcherHeader title="Personal Details" />
      <div className="boss-content-switcher__content">
        <Form
          onSubmit={handleSubmit}
          component={PersonalDetailsForm}
          {...props}
        />
      </div>
    </article>
  );
};

export default withRouter(PersonalDetails);
