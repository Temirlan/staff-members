import React from "react";
import ReSelect from "react-select";
import "react-select/dist/react-select.css";

class Select extends React.Component {
  handleChange = value => {
    const {
      input: { onChange },
      multi = false
    } = this.props;
    console.log(value);
    if (multi) {
      const values = value.split(",").filter(Boolean);
      onChange(values);
    } else {
      if (!value) {
        onChange(null);
      } else {
        onChange(value);
      }
    }
  };

  render() {
    const {
      options,
      input: { value },
      multi = false,
      clearable = false
    } = this.props;
    return (
      <div className="boss-form__select">
        <ReSelect
          name="select"
          className="Select Select--single"
          value={value}
          simpleValue
          multi={multi}
          clearable={clearable}
          onChange={this.handleChange}
          options={this.props.options}
          placeholder=""
          searchable={false}
        />
      </div>
    );
  }
}

export default Select;
