import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "./DateRangeInput.css";

class DateRangeInput extends React.Component {
  state = {
    startDate: moment().subtract(2, "year"),
    endDate: moment(),
    focusedInput: null
  };

  handleDateChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const {
      input: { value, onChange }
    } = this.props;

    return (
      <DateRangePicker
        endDate={this.state.endDate}
        endDateId="endDate"
        focusedInput={this.state.focusedInput}
        isOutsideRange={() => null}
        onDatesChange={this.handleDateChange}
        onFocusChange={this.handleFocusChange}
        startDate={this.state.startDate}
        startDateId="startDate"
        withPortal={true}
        showClearDates={true}
      />
    );
  }
}

export default DateRangeInput;
