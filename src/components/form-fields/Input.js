import React from "react";
import FormFieldError from "./FormFieldError";
import FieldLabelText from "./FieldLabelText";

const Input = props => {
  const { textLabel, requeredSymbol, name } = props;

  return (
    <div className="boss-form__field">
      <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
      <input name={name} className="boss-form__input" {...props.input} />
      {props.meta.submitError && (
        <FormFieldError errors={props.meta.submitError} />
      )}
    </div>
  );
};

export default Input;
