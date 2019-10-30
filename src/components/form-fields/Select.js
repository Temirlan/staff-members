import React from "react";
import ReSelect from "react-select";

class Select extends React.Component {
  handleChange = (value, multi, onChange) => {
    if (multi && value) {
      const values = value.split(",").map(value => parseInt(value));
      onChange(values);
    } else {
      onChange(value);
    }
  };

  render() {
    const {
      options,
      input: { value, onChange },
      multi = false,
      clearable = false,
      valueKey,
      labelKey,
      className
    } = this.props;
    return (
      <div className="boss-form__select">
        <ReSelect
          name="select"
          className={className}
          value={value}
          valueKey={valueKey}
          labelKey={labelKey}
          simpleValue
          multi={multi}
          clearable={clearable}
          onChange={value => this.handleChange(value, multi, onChange)}
          options={options}
          placeholder=""
          searchable={false}
        />
      </div>
    );
  }
}

export default Select;
