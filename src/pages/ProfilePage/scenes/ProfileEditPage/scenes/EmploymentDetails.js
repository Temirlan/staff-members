import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import { PATH_STAFF_MEMBERS } from "../../../../../consts";
import EmploymentDetailsForm from "../components/EmploymentDetailsForm";

class EmploymentDetails extends React.Component {
  handleSubmit = values => {
    return this.props.onUpdateEmploymentDeatails(values).then(values => {
      if (values.statusCode === 400) {
        return values;
      }

      if (values.statusCode === 200) {
        this.props.history.push(
          `${PATH_STAFF_MEMBERS}/${this.props.match.params.idUser}`
        );
      }
    });
  };

  render = () => {
    const {
      staffMember: { statusStatement }
    } = this.props;

    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <ContentSwitcherHeader title="Employment Details" />
        <div className="boss-content-switcher__content">
          <Form
            onSubmit={this.handleSubmit}
            initialValues={{ statusStatement }}
            component={EmploymentDetailsForm}
            {...this.props}
          />
        </div>
      </article>
    );
  };
}

export default withRouter(EmploymentDetails);
