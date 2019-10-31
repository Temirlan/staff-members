import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  const { disabled, onClick, type } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames({
        "boss-button boss-form__submit boss-form__submit_adjust_single":
          type === "form"
      })}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired
};

export default Button;
