import React from "react";

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

export default Logo;
