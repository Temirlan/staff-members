import React from "react";

import { Form, Field } from "react-final-form";
import DateRangeInput from "../../../components/form-fields/DateRangeInput/DateRangeInput";
import Select from "../../../components/form-fields/Select";
import Textarea from "../../../components/form-fields/Textarea";
import Button from "../../../components/Button/Button";

const AddHolidayForm = props => {
  return (
    <div className="boss-modal-window__form">
      <Form
        onSubmit={values => console.log(values)}
        initialValues={{
          rangeDate: { startDate: "2017-10-16", endDate: "2017-10-26" }
        }}
        className="boss-form"
        render={({ handleSubmit, submitting }) => (
          <>
            <div className="boss-form__row">
              <div className="boss-form__field boss-form__field_layout_max">
                <Field
                  textLabel="Date"
                  name="rangeDate"
                  component={DateRangeInput}
                  displayFormat="MM/DD/YYYY"
                />
              </div>
              <div className="boss-form__field boss-form__field_layout_third">
                <Field
                  textLabel="Holiday Type"
                  name="holidayTypeId"
                  component={Select}
                  options={props.holidayTypes}
                  valueKey="id"
                  labelKey="name"
                />
              </div>
            </div>
            <Field textLabel="Note" name="note" component={Textarea} />

            <div className="boss-form__field">
              <Button disabled={submitting} onClick={handleSubmit} addHoliday>
                Add Holiday
              </Button>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default AddHolidayForm;
