import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "./DateRangeInput.css";
import FieldLabelText from "../FieldLabelText";

class DateRangeInput extends React.Component {
  constructor(props) {
    super(props);

    const [startDate, endDate] = props.input.value.split(" - ");

    this.state = {
      startDate: moment(startDate),
      endDate: moment(endDate),
      focusedInput: null
    };
  }

  handleDateChange = ({ startDate, endDate }) => {
    const {
      input: { onChange }
    } = this.props;

    let updStartDate = null;
    let updEndDate = null;

    if (startDate) {
      updStartDate = moment(startDate);
    }

    if (endDate) {
      updEndDate = moment(endDate);
    }

    this.setState({
      startDate: updStartDate,
      endDate: updEndDate
    });

    if (startDate && endDate) {
      onChange(
        `${startDate.format("YYYY-MM-DD")} - ${endDate.format("YYYY-MM-DD")}`
      );
    } else {
      onChange(null);
    }
  };

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const { textLabel, requeredSymbol } = this.props;

    return (
      <div className="date-range-picker  date-range-picker_type_interval-fluid date-range-picker_type_icon">
        {textLabel && (
          <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
        )}
        <DateRangePicker
          endDate={this.state.endDate}
          endDateId="endDate"
          startDate={this.state.startDate}
          startDateId="startDate"
          focusedInput={this.state.focusedInput}
          isOutsideRange={() => null}
          onDatesChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
          withPortal={true}
          showClearDates={true}
        />
      </div>
    );
  }
}

export default DateRangeInput;
