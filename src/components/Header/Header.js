import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">{props.children}</div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired
};

export default Header;
