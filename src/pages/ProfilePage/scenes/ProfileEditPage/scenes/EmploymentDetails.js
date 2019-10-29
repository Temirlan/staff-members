import React from "react";
import classNames from "classnames";
import { Form, Field } from "react-final-form";

import ContentSwitcherHeader from "./components/ContentSwitcherHeader";
import Options from "./components/Options";

const SelectControl = props => {
  return (
    <div className="Select-control">
      <span className="Select-multi-value-wrapper" id="react-select-2--value">
        <div className="Select-placeholder">{props.selectOption}</div>
      </span>
      <span className="Select-arrow-zone">
        <span className="Select-arrow"></span>
      </span>
    </div>
  );
};

const SelectMenuOuter = props => {
  return (
    <div className="Select-menu-outer">
      <div role="listbox" className="Select-menu" id="react-select-2--list">
        {props.children}
      </div>
    </div>
  );
};

class EmploymentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectMainMenue: false,
      selectStaffType: false,
      selectPayRate: false
    };
  }

  getSelectClass = () => {
    return classNames("Select", "Select--single", {
      "is-focused is-open": this.state.selectMainMenue
    });
  };

  handleIsSetting = () => {
    this.setState(state => ({
      isSetting: !state.isSetting
    }));
  };

  handleSelectPayRate = () => {
    this.setState(state => {
      return {
        selectPayRate: !state.selectPayRate
      };
    });
  };

  handleSelectStaffType = () => {
    this.setState(state => {
      return {
        selectStaffType: !state.selectStaffType
      };
    });
  };

  handleSelectMainMenue = () => {
    this.setState(state => {
      return {
        selectMainMenue: !state.selectMainMenue
      };
    });
  };

  render = () => {
    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <ContentSwitcherHeader title="Employment Details" />

        <div className="boss-content-switcher__content">
          <Form
            onSubmit={() => {}}
            validate={values => {
              const errors = {};
              if (!values.mainVenue) {
                errors.otherVenues = "This is a required field!";
              }
              return errors;
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Field name="mainVenue">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label
                          htmlFor="select-venue"
                          className="boss-form__label"
                        >
                          <span className="boss-form__label-text">
                            Main Venue
                          </span>
                        </label>
                        <div className="boss-form__select">
                          <div
                            className={this.getSelectClass()}
                            style={
                              this.state.selectMainMenue
                                ? { overflow: "visible" }
                                : { overflow: "hidden" }
                            }
                            onClick={this.handleSelectMainMenue}
                          >
                            <SelectControl
                              selectOption={this.props.optionMainVenue}
                            />
                            <SelectMenuOuter>
                              <Options
                                options={this.props.venues}
                                setSelectionOption={
                                  this.props.setOptionMainVenue
                                }
                              />
                            </SelectMenuOuter>
                          </div>
                        </div>
                        {this.state.isSetting && (
                          <div class="boss-form__error">
                            <p class="boss-form__error-text">
                              <span class="boss-form__error-line">
                                This is a required field!
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </Field>

                <Field name="otherVenues">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">
                            Other Venues
                          </span>
                          <input
                            {...input}
                            name="other-venues"
                            type="text"
                            className="boss-form__input"
                          />
                        </label>
                      </div>
                    );
                  }}
                </Field>

                <Field name="staffType">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label
                          htmlFor="select-venue"
                          className="boss-form__label"
                        >
                          <span className="boss-form__label-text">
                            Staff Type*
                          </span>
                        </label>
                        <div className="boss-form__select">
                          <div
                            className={this.getSelectClass()}
                            style={
                              this.state.selectStaffType
                                ? { overflow: "visible" }
                                : { overflow: "hidden" }
                            }
                            onClick={this.handleSelectStaffType}
                          >
                            <SelectControl
                              selectOption={this.props.optionStaffTypes}
                            />
                            <SelectMenuOuter>
                              <Options
                                options={this.props.staffTypes}
                                setSelectionOption={
                                  this.props.setOptionStaffType
                                }
                              />
                            </SelectMenuOuter>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field name="StartsAt">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">
                            Starts At*
                          </span>
                        </label>
                        <div className="date-control date-control_type_icon">
                          <div className="SingleDatePicker SingleDatePicker_1">
                            <div className="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2 SingleDatePickerInput__showClearDate SingleDatePickerInput__showClearDate_3">
                              <div className="DateInput DateInput_1">
                                <input
                                  className="DateInput_input DateInput_input_1 DateInput_input__focused DateInput_input__focused_2"
                                  aria-label="Date"
                                  name="date"
                                  placeholder="Date"
                                  autoComplete="off"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field name="payRate">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label
                          htmlFor="select-venue"
                          className="boss-form__label"
                        >
                          <span className="boss-form__label-text">
                            Pay rate*
                          </span>
                        </label>
                        <div className="boss-form__select">
                          <div
                            className={this.getSelectClass()}
                            style={
                              this.state.selectPayRate
                                ? { overflow: "visible" }
                                : { overflow: "hidden" }
                            }
                            onClick={this.handleSelectPayRate}
                          >
                            <SelectControl
                              selectOption={this.props.optionPayRates}
                            />
                            <SelectMenuOuter>
                              <Options
                                options={this.props.payRates}
                                setSelectionOption={this.props.setOptionPayRate}
                              />
                            </SelectMenuOuter>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Field>

                <Field name="dayPreference">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">
                            Day Preference
                          </span>
                          <input
                            {...input}
                            name="day-pref"
                            type="text"
                            className="boss-form__input"
                          />
                        </label>
                        <p className="boss-form__field-note">
                          Preferred days to work displayed to the rota (e.g
                          mornings and weekends)
                        </p>
                      </div>
                    );
                  }}
                </Field>

                <Field name="hoursPreference">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">
                            Hours Preference
                          </span>
                          <input
                            {...input}
                            name="hours-pref"
                            type="text"
                            className="boss-form__input"
                          />
                        </label>
                        <p className="boss-form__field-note">
                          Preferred number of hours to work per week displayed
                          in the rota (e.g 40,20+)
                        </p>
                      </div>
                    );
                  }}
                </Field>

                <Field name="nationalInsuranceNumber">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">
                            National Insurance Number
                          </span>
                          <input
                            {...input}
                            name="hours-pref"
                            type="text"
                            className="boss-form__input"
                          />
                        </label>
                      </div>
                    );
                  }}
                </Field>

                <Field name="sageId">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label className="boss-form__label">
                          <span className="boss-form__label-text">Sage ID</span>
                          <input
                            {...input}
                            name="hours-pref"
                            type="text"
                            className="boss-form__input"
                          />
                        </label>
                      </div>
                    );
                  }}
                </Field>

                <Field name="starterEmployment">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <div className="boss-choice-list">
                          <div className="boss-choice-list__header">
                            <h3 className="boss-choice-list__title">
                              Starter Employement Status Statement
                            </h3>
                          </div>
                          <div className="boss-choice-list__content">
                            <p className="boss-choice-list__text">
                              Tick one that applies
                            </p>
                            <div className="boss-choice-list__controls">
                              <label className="boss-choice-list__radio-label">
                                <input
                                  type="radio"
                                  name="employement-status"
                                  value="1"
                                  className="boss-choice-list__radio-button"
                                />
                                <span className="boss-choice-list__radio-label-text">
                                  I have supplied my P45 from my previous
                                  employer
                                </span>
                              </label>
                              <label className="boss-choice-list__radio-label">
                                <input
                                  type="radio"
                                  name="employement-status"
                                  value="2"
                                  className="boss-choice-list__radio-button"
                                />
                                <span className="boss-choice-list__radio-label-text">
                                  This is my first job since the 6th of April. I
                                  have not been receiving taxable jobseekers
                                  allowance, Incapacity benefits or a
                                  state/occupational pernsion
                                </span>
                              </label>
                              <label className="boss-choice-list__radio-label">
                                <input
                                  type="radio"
                                  name="employement-status"
                                  value="3"
                                  className="boss-choice-list__radio-button"
                                />
                                <span className="boss-choice-list__radio-label-text">
                                  This is now my only job. Since the 6th of
                                  April I have had another jobs received taxable
                                  jobseekers allowance, Incapacity benefit. I
                                  don’t receivea state/occupational pension
                                </span>
                              </label>
                              <label className="boss-choice-list__radio-label">
                                <input
                                  type="radio"
                                  name="employement-status"
                                  value="4"
                                  className="boss-choice-list__radio-button"
                                />
                                <span className="boss-choice-list__radio-label-text">
                                  I have another job or receive a
                                  state/occupational pernsion
                                </span>
                              </label>
                              <label className="boss-choice-list__radio-label">
                                <input
                                  type="radio"
                                  name="employement-status"
                                  value="5"
                                  className="boss-choice-list__radio-button"
                                />
                                <span className="boss-choice-list__radio-label-text">
                                  I left a course of higher education before the
                                  6th of April &amp; receive my first student
                                  loan instalmen on or after the 1st of
                                  September 1998 &amp; I have not fully repaid
                                  my student loan
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Field>
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
