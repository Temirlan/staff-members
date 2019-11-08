import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  const { disabled, onClick, type, status, filterForm } = props;
  let classes = "";
  if (status) {
    classes = classNames(
      "boss-button",
      "boss-button_type_small",
      "boss-button_type_no-behavior",
      {
        "boss-button_role_enabled": status === "enabled",
        "boss-button_role_disabled": status === "disabled"
      }
    );
  }

  if (type === "add-holiday") {
    classes = classNames(
      "boss-button",
      "boss-button_role_add",
      "boss-form__submit"
    );
  }

  if (type === "form") {
    classes = classNames(
      "boss-button",
      "boss-button boss-form__submit boss-form__submit_adjust_single"
    );
  }

  if (type === "close-add-modal-holiday") {
    classes = classNames("boss-modal-window__close-inner");
  }

  if (filterForm) {
    classes = classNames("boss-button", "boss-form__submit");
  }

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
