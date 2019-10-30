import React from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class DateInput extends React.Component {
  state = {
    calendarFocused: false
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    const {
      input: { value, onChange },
      displayFormat
    } = this.props;
    return (
      <div className="date-control date-control_type_icon">
        <div className="SingleDatePicker SingleDatePicker_1">
          <div className="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2 SingleDatePickerInput__showClearDate SingleDatePickerInput__showClearDate_3">
            <SingleDatePicker
              date={value ? value : moment()}
              onDateChange={createdAt => onChange(createdAt)}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              withPortal={true}
              displayFormat={displayFormat}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DateInput;
