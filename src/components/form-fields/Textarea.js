import React from "react";
import FieldLabelText from "./FieldLabelText";

const Textarea = props => {
  const {
    input: { value, onChange },
    textLabel,
    requeredSymbol
  } = props;

  return (
    <div className="boss-form__field">
      <FieldLabelText text={textLabel} requeredSymbol={requeredSymbol} />
      <textarea
        name="note"
        className="boss-form__textarea"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
