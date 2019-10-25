import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {
  return <button className={props.className}>{props.children}</button>;
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Button;
