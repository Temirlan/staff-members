import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import FormField from "../../../../../components/form-fields/FormField";
import Input from "../../../../../components/form-fields/Input";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import Button from "../../../../../components/Button/Button";
import { PATH_STAFF_MEMBERS } from "../../../../../consts";

const ContactDetails = props => {
  const handleSubmit = values => {
    return props.onUpdateContactDetails(values).then(values => {
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
      data-chapter="contact"
    >
      <ContentSwitcherHeader title="Contact Details" />
      <div className="boss-content-switcher__content">
        <Form
          onSubmit={values => {
            return handleSubmit(values);
          }}
          render={({ submitError, handleSubmit, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FormField
                  textLabel="Email"
                  nameField="Input"
                  name="email"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Phone number"
                  nameField="Input"
                  name="phoneNumber"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Address"
                  nameField="Input"
                  name="address"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Postcode"
                  nameField="Input"
                  name="postcode"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Country"
                  nameField="Input"
                  name="country"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="County"
                  nameField="Input"
                  name="county"
                  component={Input}
                  className="boss-form__input"
                />

                {submitError && <FormFieldError errors={submitError} />}
                <div className="boss-form__field boss-form__field_justify_end">
                  <Button
                    disabled={submitting}
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            );
          }}
        />
      </div>
    </article>
  );
};

export default withRouter(ContactDetails);
