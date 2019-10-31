import React from "react";
import { Form, Field } from "react-final-form";

import Select from "../../../../../components/form-fields/Select";
import DateInput from "../../../../../components/form-fields/DateInput";
import ChoiceList from "../../../../../components/form-fields/ChoiceList";
import FormFieldError from "../../../../../components/form-fields/FormFieldError";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/form-fields/Input";

const EmploymentDetailsForm = props => {
  const { payRates, staffTypes, venues, onSubmit, initialValues } = props;

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ submitError, handleSubmit, submitting }) => (
          <>
            <Field
              textLabel="Main Venue"
              name="masterVenueId"
              component={Select}
              options={venues}
              valueKey="id"
              labelKey="name"
            />
            <Field
              textLabel="Other Venues"
              name="otherVenueIds"
              component={Select}
              options={venues}
              multi
              clearable
              valueKey="id"
              labelKey="name"
            />
            <Field
              textLabel="Staff Type"
              requeredSymbol="*"
              name="staffTypeId"
              component={Select}
              options={staffTypes}
              valueKey="id"
              labelKey="name"
            />

            <Field
              textLabel="Starts At"
              requeredSymbol="*"
              name="startsAt"
              component={DateInput}
              options={staffTypes}
            />

            <Field
              textLabel="Pay rate"
              requeredSymbol="*"
              name="payRateId"
              component={Select}
              options={payRates}
              valueKey="id"
              labelKey="name"
            />

            <Field
              textLabel="Day Preference"
              name="dayPreferenceNote"
              component={Input}
              description="Preferred days to work displayed to the rota (e.g mornings
      and weekends)"
            />

            <Field
              textLabel="Hours Preference"
              name="hoursPreferenceNote"
              component={Input}
              description="Preferred number of hours to work per week displayed in the
    rota (e.g 40,20+)"
            />

            <Field
              textLabel="National Insurance Number"
              name="nationalInsuranceNumber"
              component={Input}
            />

            <Field textLabel="Sage ID" name="sageId" component={Input} />

            <div className="boss-form__field">
              <ChoiceList
                title="Starter Employement Status Statement"
                text="Tick one that applies"
              />
            </div>
            {submitError && <FormFieldError errors={submitError} />}
            <div className="boss-form__field boss-form__field_justify_end">
              <Button disabled={submitting} type="form" onClick={handleSubmit}>
                Save
              </Button>
            </div>
          </>
        )}
      />
    </>
  );
};

export default EmploymentDetailsForm;
