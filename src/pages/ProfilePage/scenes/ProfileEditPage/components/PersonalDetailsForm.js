import React from "react";
import FormField from "../../../../../components/form-fields/FormField";
import Input from "../../../../../components/form-fields/Input";
import Select from "../../../../../components/form-fields/Select";
import DateInput from "../../../../../components/form-fields/DateInput";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import Button from "../../../../../components/Button/Button";

const PersonalDetailsForm = props => {
  const { genderValues, submitError, handleSubmit, submitting } = props;

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

      <Button
        disabled={submitting}
        destination="FormButton"
        className="boss-button boss-form__submit boss-form__submit_adjust_single"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default PersonalDetailsForm;
