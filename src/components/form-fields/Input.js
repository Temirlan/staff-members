import React from "react";
import classNames from "classnames";
import FormFieldError from "./FormFieldError";
import FieldLabelText from "./FieldLabelText";

const Input = props => {
  const { textLabel, requeredSymbol, name, meta, input } = props;

  return (
    <div className="boss-form__field ">
      <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
      <input
        name={name}
        className={classNames("boss-form__input", {
          "boss-form__input_state_error":
            meta.submitError && !meta.dirtySinceLastSubmit
        })}
        {...input}
      />
      {meta.submitError && !meta.dirtySinceLastSubmit && (
        <FormFieldError errors={meta.submitError} />
      )}
    </div>
  );
};

export default Input;
