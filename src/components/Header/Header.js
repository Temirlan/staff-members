import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo/Logo";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">
        <Logo />
        <Link
          to="#"
          className="boss-page-header__action boss-page-header__action_role_search"
          data-dropdown="search"
        ></Link>
        <Link
          to="#"
          className="boss-page-header__action boss-page-header__action_role_profile"
          data-dropdown="profile"
        ></Link>
      </div>
    </div>
  );
};

export default Header;
