import React from "react";

const FieldLabelText = props => {
  return (
    <label className="boss-form__label">
      <span className="boss-form__label-text">{props.text}</span>
    </label>
  );
};

export default FieldLabelText;
