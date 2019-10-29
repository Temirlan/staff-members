import React from "react";
import Input from "./Input";

const DateInput = props => {
  return (
    <div className="date-control date-control_type_icon">
      <div className="SingleDatePicker SingleDatePicker_1">
        <div className="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2 SingleDatePickerInput__showClearDate SingleDatePickerInput__showClearDate_3">
          <div className="DateInput DateInput_1">
            <Input
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
  );
};

export default DateInput;
