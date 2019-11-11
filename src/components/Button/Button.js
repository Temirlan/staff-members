import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  const {
    disabled,
    onClick,
    status,
    filterForm,
    addHoliday,
    formDetails,
    closeModal
  } = props;

  const classes = classNames({
    "boss-button boss-button_type_small boss-button_type_no-behavior": status,
    "boss-button_role_enabled": status === "enabled",
    "boss-button_role_disabled": status === "disabled",
    "boss-button boss-button_role_add boss-form__submit": addHoliday,
    "boss-button boss-button boss-form__submit boss-form__submit_adjust_single": formDetails,
    "boss-modal-window__close-inner": closeModal,
    "boss-button boss-form__submit": filterForm
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
