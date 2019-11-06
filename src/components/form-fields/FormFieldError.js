import React from "react";

const FormFieldError = props => {
  return (
    <div className="boss-form__error">
      <p className="boss-form__error-text">
        {props.errors.map((error, index) => (
          <span key={index} className="boss-form__error-line">
            {error}
          </span>
        ))}
      </p>
    </div>
  );
};

export default FormFieldError;
