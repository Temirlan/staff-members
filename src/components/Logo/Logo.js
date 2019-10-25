import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div className="boss-page-header__group boss-page-header__group_role_logo">
      <Link to="/staff_members" className="boss-page-header__logo">
        {props.name}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  name: PropTypes.string.isRequired
};

export default Logo;
