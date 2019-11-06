import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  const { disabled, onClick, type, status } = props;

  const classes = classNames({
    "boss-button": type !== "close-add-modal-holiday",
    "boss-button_type_small": status,
    "boss-button_type_no-behavior": status,
    "boss-button_role_enabled": status === "enabled",
    "boss-button_role_disabled": status === "disabled",
    "boss-button boss-form__submit boss-form__submit_adjust_single":
      type === "form",
    "boss-button_role_add": type === "add-holiday",
    "boss-modal-window__close-inner": type === "close-add-modal-holiday"
  });

  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
