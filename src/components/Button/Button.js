import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  if (props.destination === "FormButton") {
    return (
      <div className="boss-form__field boss-form__field_justify_end">
        <button {...props}>{props.children}</button>
      </div>
    );
  }

  return <button {...props}>{props.children}</button>;
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Button;
