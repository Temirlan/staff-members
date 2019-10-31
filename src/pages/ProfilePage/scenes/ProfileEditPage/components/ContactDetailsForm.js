import React from "react";
import FormField from "../../../../../components/form-fields/FormField";
import Input from "../../../../../components/form-fields/Input";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import Button from "../../../../../components/Button/Button";

const ContactDetailsForm = props => {
  const { submitError, handleSubmit, submitting } = props;
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

export default ContactDetailsForm;
