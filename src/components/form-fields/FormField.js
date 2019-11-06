import React from "react";
import FieldLabelText from "./FieldLabelText";
import { Field } from "react-final-form";
import Input from "./Input";

const FormField = props => {
  const {
    textLabel,
    component,
    nameField,
    className,
    options,
    name,
    multi = false,
    clearable = false,
    description,
    requeredSymbol
  } = props;

  return (
    <div className="boss-form__field">
      <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
      {nameField === "Select" && (
        <Field
          name={name}
          component={component}
          options={options}
          valueKey="id"
          labelKey="name"
          multi={multi}
          clearable={clearable}
          className={className}
        />
      )}
      {nameField === "Input" && (
        <Field name={name} component={Input} className={className} />
      )}

      {nameField === "DateInput" && (
        <Field
          name={name}
          component={component}
          className={className}
          displayFormat="DD-MM-YYYY"
        />
      )}
      {description && <p className="boss-form__field-note">{description}</p>}
    </div>
  );
};

export default FormField;
