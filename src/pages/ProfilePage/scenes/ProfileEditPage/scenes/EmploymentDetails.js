import React from "react";
import { Form, Field } from "react-final-form";

import ContentSwitcherHeader from "./components/ContentSwitcherHeader";
import Select from "../../../../../components/form-fields/Select";
import FieldLabelText from "../../../../../components/form-fields/FieldLabelText";
import Input from "../../../../../components/form-fields/Input";
import DateInput from "../../../../../components/form-fields/DateInput";
import ChoiceList from "../../../../../components/form-fields/ChoiceList";

class EmploymentDetails extends React.Component {
  render = () => {
    const {
      venueOptions,
      staffTypeOptions,
      payRateOptions
    } = this.props.staffMemberEdit;

    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <ContentSwitcherHeader title="Employment Details" />

        <div className="boss-content-switcher__content">
          <Form
            onSubmit={values => {
              console.log(values);
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="boss-form__field">
                  <FieldLabelText text="Main Venue" />
                  <Field
                    name="mainVenue"
                    component={Select}
                    options={venueOptions}
                  />
                </div>
                <div className="boss-form__field">
                  <FieldLabelText text="Other Venues" />
                  <Field
                    name="otherVenues"
                    component={Select}
                    multi
                    clearable
                    options={venueOptions}
                  />
                </div>
                <div className="boss-form__field">
                  <FieldLabelText text="Staff Type*" />
                  <Field name="staffType" component={Select} options={[]} />
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="Starts At*" />
                  <Field name="StartsAt" component={DateInput} />
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="Pay rate*" />
                  <Field name="payRate" component={Select} options={[]} />
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="Day Preference" />
                  <Field
                    name="dayPreference"
                    render={() => (
                      <Input
                        name="day-pref"
                        type="text"
                        className="boss-form__input"
                      />
                    )}
                  />
                  <p className="boss-form__field-note">
                    Preferred days to work displayed to the rota (e.g mornings
                    and weekends)
                  </p>
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="Hours Preference" />
                  <Field
                    name="hoursPreference"
                    render={() => (
                      <Input
                        name="hours-pref"
                        type="text"
                        className="boss-form__input"
                      />
                    )}
                  />
                  <p className="boss-form__field-note">
                    Preferred number of hours to work per week displayed in the
                    rota (e.g 40,20+)
                  </p>
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="National Insurance Number" />
                  <Field
                    name="nationalInsuranceNumber"
                    render={() => (
                      <Input
                        name="insurance-number"
                        type="text"
                        className="boss-form__input"
                      />
                    )}
                  />
                </div>

                <div className="boss-form__field">
                  <FieldLabelText text="Sage ID" />
                  <Field
                    name="sageId"
                    render={() => (
                      <Input
                        name="sage-id"
                        type="text"
                        className="boss-form__input"
                      />
                    )}
                  />
                </div>

                <div className="boss-form__field">
                  <ChoiceList
                    title="Starter Employement Status Statement"
                    text="Tick one that applies"
                  />
                </div>

                <div className="boss-form__field boss-form__field_justify_end">
                  <button
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
