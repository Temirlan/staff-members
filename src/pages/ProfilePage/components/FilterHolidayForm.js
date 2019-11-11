import React from "react";

import { Form, Field } from "react-final-form";
import Select from "../../../components/form-fields/Select";
import DateRangeInput from "../../../components/form-fields/DateRangeInput/DateRangeInput";
import Button from "../../../components/Button/Button";

const FilterHolidayForm = props => {
  return (
    <div className="boss-board__manager-filter">
      <Form
        onSubmit={props.onFilterParamsDate}
        initialValues={{
          rangeDate: "2016-11-14 - 2016-11-20",
          filterTypeId: 1
        }}
        render={({ handleSubmit, submitting }) => (
          <div className="boss-form">
            <div className="boss-form__group boss-form__group_position_last">
              <h3 className="boss-form__group-title">Filter</h3>
              {/* boss-form__row boss-form__row_mobile boss-form__row_position_last */}
              <div className="boss-form__row boss-form__row_align_center boss-form__row_desktop boss-form__row_position_last">
                <Field
                  textLabel="Type"
                  name="filterTypeId"
                  component={Select}
                  options={props.filterTypes}
                  valueKey="id"
                  labelKey="name"
                  filterType
                />
                <div className="boss-form__field boss-form__field_layout_max boss-form__field_no-label">
                  <Field
                    name="rangeDate"
                    component={DateRangeInput}
                    displayFormat="DD/MM/YYYY"
                  />
                </div>
                <div className="boss-form__field boss-form__field_layout_min boss-form__field_no-label">
                  <Button
                    disabled={submitting}
                    onClick={handleSubmit}
                    filterForm
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FilterHolidayForm;
