import React from "react";
import { Form, Field } from "react-final-form";

import Select from "../../../../../components/form-fields/Select";
import DateInput from "../../../../../components/form-fields/DateInput";
import ChoiceList from "../../../../../components/form-fields/ChoiceList";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/form-fields/Input";
import moment from "../../../../../../../../Library/Caches/typescript/3.6/node_modules/moment/moment";

const EmploymentDetailsForm = props => {
  const {
    payRates,
    staffTypes,
    venues,
    onSubmit,
    staffMember: {
      statusStatement,
      venue,
      otherVenueIds,
      staffType,
      startsAt,
      payRate,
      hoursPreferenceNote,
      dayPreferenceNote,
      nationalInsuranceNumber,
      masterVenueId,
      staffTypeId,
      sageId,
      payRateId
    },
    errorStatusCode
  } = props;

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          statusStatement,
          otherVenueIds,
          startsAt: startsAt ? moment(startsAt, "DD-MM-YYYY") : null,
          hoursPreferenceNote,
          dayPreferenceNote,
          nationalInsuranceNumber,
          sageId,
          masterVenueId,
          staffTypeId,
          payRateId
        }}
        render={({ handleSubmit, submitting }) => (
          <>
            <Field
              textLabel="Main Venue"
              name="masterVenueId"
              component={Select}
              options={venues}
              valueKey="id"
              labelKey="name"
              option={venue && venue.id}
              statusCode={errorStatusCode}
            />
            <Field
              textLabel="Other Venues"
              name="otherVenueIds"
              component={Select}
              options={venues}
              ids={otherVenueIds}
              multi
              clearable
              valueKey="id"
              labelKey="name"
              statusCode={errorStatusCode}
            />
            <Field
              textLabel="Staff Type"
              requeredSymbol="*"
              name="staffTypeId"
              component={Select}
              options={staffTypes}
              option={staffType && staffType.id}
              valueKey="id"
              labelKey="name"
              statusCode={errorStatusCode}
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
              option={payRate && payRate.id}
              valueKey="id"
              labelKey="name"
              statusCode={errorStatusCode}
            />

            <Field
              textLabel="Day Preference"
              name="dayPreferenceNote"
              component={Input}
              description="Preferred days to work displayed to the rota (e.g mornings
      and weekends)"
              statusCode={errorStatusCode}
            />

            <Field
              textLabel="Hours Preference"
              name="hoursPreferenceNote"
              component={Input}
              description="Preferred number of hours to work per week displayed in the
    rota (e.g 40,20+)"
              statusCode={errorStatusCode}
            />

            <Field
              textLabel="National Insurance Number"
              name="nationalInsuranceNumber"
              component={Input}
              statusCode={errorStatusCode}
            />

            <Field
              textLabel="Sage ID"
              name="sageId"
              component={Input}
              statusCode={errorStatusCode}
            />

            <div className="boss-form__field">
              <ChoiceList
                title="Starter Employement Status Statement"
                text="Tick one that applies"
              />
            </div>
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
