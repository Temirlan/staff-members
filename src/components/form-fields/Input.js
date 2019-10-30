import React from "react";
import FormFieldError from "./FormFieldError";

const Input = props => {
  return (
    <>
      <input {...props} {...props.input} />
      {props.meta.submitError && (
        <FormFieldError errors={props.meta.submitError} />
      )}
    </>
  );
};

export default Input;
