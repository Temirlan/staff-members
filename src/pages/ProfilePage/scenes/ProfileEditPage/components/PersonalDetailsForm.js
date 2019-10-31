import React from "react";
import { Form, Field } from "react-final-form";
import Input from "../../../../../components/form-fields/Input";
import Select from "../../../../../components/form-fields/Select";
import DateInput from "../../../../../components/form-fields/DateInput";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import Button from "../../../../../components/Button/Button";

const PersonalDetailsForm = props => {
  const {
    genderValues,
    onSubmit,
    staffMember: { firstName, surname, dateOfBirth, gender },
    staffMember
  } = props;
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ firstName, surname, dateOfBirth }}
        render={({ submitError, handleSubmit, submitting }) => (
          <>
            <Field
              textLabel="First Name"
              requeredSymbol="*"
              name="firstName"
              component={Input}
            />

            <Field
              textLabel="Surname"
              requeredSymbol="*"
              name="surname"
              component={Input}
            />

            <Field
              textLabel="Gender"
              requeredSymbol="*"
              name="gender"
              component={Select}
              option={gender}
              valueKey="id"
              labelKey="name"
              options={genderValues}
            />

            <Field
              textLabel="Date of Birth"
              requeredSymbol="*"
              name="dateOfBirth"
              component={DateInput}
            />

            {submitError && <FormFieldError errors={submitError} />}
            <div className="boss-form__field boss-form__field_justify_end">
              <Button disabled={submitting} onClick={handleSubmit} type="form">
                Save
              </Button>
            </div>
          </>
        )}
      />
    </>
  );
};

export default PersonalDetailsForm;
