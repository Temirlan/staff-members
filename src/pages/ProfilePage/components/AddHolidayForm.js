import React from "react";

import { Form, Field } from "react-final-form";
import DateRangeInput from "../../../components/form-fields/DateRangeInput/DateRangeInput";
// 2017-10-16
const AddHolidayForm = props => {
  return (
    <div className="boss-modal-window__form">
      <Form
        onSubmit={values => console.log(values)}
        initialValues={{}}
        className="boss-form"
        render={({ handleSubmit, submitting }) => (
          <>
            <div className="boss-form__row">
              <div className="boss-form__field boss-form__field_layout_max">
                <div className="date-range-picker  date-range-picker_type_interval-fluid date-range-picker_type_icon">
                  {/* <div className="DateRangePicker">
                    <div>
                      <div className="DateRangePickerInput"> */}
                  <Field
                    textLabel="Date"
                    name="startDate"
                    component={DateRangeInput}
                  />
                  {/* </div> */}
                  {/* <div
                    className="DateRangePickerInput__arrow"
                    role="presentation"
                  >
                    <svg viewBox="0 0 1000 1000">
                      <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
                    </svg>
                  </div>
                  <Field name="endDate" component={DateRangeInput} />
                  <button
                    type="button"
                    className="DateRangePickerInput__clear-dates"
                  >
                    <div className="DateRangePickerInput__close-icon">
                      <svg viewBox="0 0 12 12">
                        <path
                          fill-rule="evenodd"
                          d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div> */}
                </div>
              </div>
              {/* </div>
                </div>
              </div> */}

              <div className="boss-form__field boss-form__field_layout_third"></div>
            </div>

            {/* <div class="date-range-picker  date-range-picker_type_interval-fluid date-range-picker_type_icon">
              <div class="DateRangePicker">
                <div>
                  <div class="DateRangePickerInput">
                    </div>
                </div>
              </div>
            </div> */}
            {/* <div className="boss-form__field boss-form__field_justify_end">
              <Button disabled={submitting} onClick={handleSubmit} type="form">
                Save
              </Button>
            </div> */}
          </>
        )}
      />
    </div>
  );
};

export default AddHolidayForm;
