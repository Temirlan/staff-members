import React from "react";
import ReSelect from "react-select";
import classNames from "classnames";
import FormFieldError from "./FormFieldError";
import FieldLabelText from "./FieldLabelText";

const Select = props => {
  const {
    options,
    input: { value, onChange },
    multi = false,
    clearable = false,
    valueKey,
    labelKey,
    meta,
    textLabel,
    requeredSymbol
  } = props;

  const handleChange = value => {
    if (multi && value) {
      const values = value.split(",").map(value => parseInt(value));
      onChange(values);
    } else {
      onChange(value);
    }
  };

  return (
    <div className="boss-form__field">
      <div
        className={classNames("boss-form__select", {
          "boss-form__select_state_error":
            meta.submitError && !meta.dirtySinceLastSubmit
        })}
      >
        <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
        <ReSelect
          name="select"
          className={classNames({ "Select Select--single": !multi })}
          value={value}
          valueKey={valueKey}
          labelKey={labelKey}
          simpleValue
          multi={multi}
          clearable={clearable}
          onChange={handleChange}
          options={options}
          placeholder=""
          searchable={false}
        />
        {meta.submitError && !meta.dirtySinceLastSubmit && (
          <FormFieldError errors={meta.submitError} />
        )}
      </div>
    </div>
  );
};

export default Select;
