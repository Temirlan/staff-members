import React from "react";
import Logo from "./Logo/Logo";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">
        <Logo />
        <a
          href="#"
          className="boss-page-header__action boss-page-header__action_role_search"
          data-dropdown="search"
        ></a>
        <a
          href="#"
          className="boss-page-header__action boss-page-header__action_role_profile"
          data-dropdown="profile"
        ></a>
      </div>
    </div>
  );
};

export default Header;
