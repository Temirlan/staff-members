import React from "react";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import ContentSwitcherHeader from "./components/ContentSwitcherHeader";
import Select from "../../../../../components/form-fields/Select";
import DateInput from "../../../../../components/form-fields/DateInput";
import ChoiceList from "../../../../../components/form-fields/ChoiceList";
import FormField from "../../../../../components/form-fields/FormField";

function handleSubmit(values) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        [FORM_ERROR]: ["Something went wrong"],
        masterVenueId: ["Error"],
        otherVenueIds: ["Error"],
        staffTypeId: ["Error"],
        masterVenueId: ["Error"]
      });
      console.log(values);
    }, 1500);
  });
}

class EmploymentDetails extends React.Component {
  render = () => {
    const { payRates, staffTypes, venues } = this.props;

    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <ContentSwitcherHeader title="Employment Details" />

        <div className="boss-content-switcher__content">
          <Form
            onSubmit={values => {
              return handleSubmit(values);
            }}
            initialValues={{ statusStatement: "employment_status_a" }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <FormField
                  textLabel="Main Venue"
                  nameField="Select"
                  name="masterVenueId"
                  component={Select}
                  options={venues}
                  className="Select Select--single"
                />
                <FormField
                  textLabel="Other Venues"
                  nameField="Select"
                  name="otherVenueIds"
                  component={Select}
                  multi
                  clearable
                  options={venues}
                />
                <FormField
                  textLabel="Staff Type"
                  requeredSymbol="*"
                  nameField="Select"
                  name="staffTypeId"
                  component={Select}
                  options={staffTypes}
                  className="Select Select--single"
                />

                <FormField
                  textLabel="Starts At"
                  requeredSymbol="*"
                  nameField="DateInput"
                  name="startsAt"
                  component={DateInput}
                />

                <FormField
                  textLabel="Pay rate"
                  requeredSymbol="*"
                  nameField="Select"
                  name="payRateId"
                  component={Select}
                  options={payRates}
                  className="Select Select--single"
                />

                <FormField
                  textLabel="Day Preference"
                  nameField="Input"
                  name="dayPreferenceNote"
                  className="boss-form__input"
                  component="input"
                  description="Preferred days to work displayed to the rota (e.g mornings
                    and weekends)"
                />

                <FormField
                  textLabel="Hours Preference"
                  nameField="Input"
                  name="hoursPreferenceNote"
                  className="boss-form__input"
                  component="input"
                  description="Preferred number of hours to work per week displayed in the
                  rota (e.g 40,20+)"
                />

                <FormField
                  textLabel="National Insurance Number"
                  nameField="Input"
                  name="nationalInsuranceNumber"
                  className="boss-form__input"
                  component="input"
                />

                <FormField
                  textLabel="Sage ID"
                  nameField="Input"
                  name="sageId"
                  className="boss-form__input"
                  component="input"
                />

                <div className="boss-form__field">
                  <ChoiceList
                    title="Starter Employement Status Statement"
                    text="Tick one that applies"
                  />
                </div>

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
            )}
          />
        </div>
      </article>
    );
  };
}

export default EmploymentDetails;
