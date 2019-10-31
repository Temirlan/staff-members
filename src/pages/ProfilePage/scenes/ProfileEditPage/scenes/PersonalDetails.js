import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";

import ContentSwitcherHeader from "../components/ContentSwitcherHeader";
import FormField from "../../../../../components/form-fields/FormField";
import Select from "../../../../../components/form-fields/Select";
import Input from "../../../../../components/form-fields/Input";
import DateInput from "../../../../../components/form-fields/DateInput";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import { PATH_STAFF_MEMBERS } from "../../../../../consts";

const PersonalDetails = props => {
  const { genderValues } = props;

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
          onSubmit={values => {
            return handleSubmit(values);
          }}
          render={({ submitError, handleSubmit, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FormField
                  textLabel="First Name"
                  requeredSymbol="*"
                  nameField="Input"
                  name="firstName"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Surname"
                  requeredSymbol="*"
                  nameField="Input"
                  name="surname"
                  component={Input}
                  className="boss-form__input"
                />

                <FormField
                  textLabel="Gender"
                  requeredSymbol="*"
                  nameField="Select"
                  name="gender"
                  component={Select}
                  options={genderValues}
                  className="Select Select--single"
                />

                <FormField
                  textLabel="Date of Birth"
                  requeredSymbol="*"
                  nameField="DateInput"
                  name="dateOfBirth"
                  component={DateInput}
                />

                {submitError && <FormFieldError errors={submitError} />}
                <div className="boss-form__field boss-form__field_justify_end">
                  <button
                    disabled={submitting}
                    className="boss-button boss-form__submit boss-form__submit_adjust_single"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            );
          }}
        />
      </div>
    </article>
  );
};

export default withRouter(PersonalDetails);
