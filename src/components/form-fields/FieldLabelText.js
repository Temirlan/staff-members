import React from "react";

const FieldLabelText = props => {
  return (
    <label className="boss-form__label">
      <span className="boss-form__label-text">
        {props.text}
        {props.requeredSymbol && props.requeredSymbol}
      </span>
    </label>
  );
};

export default FieldLabelText;
