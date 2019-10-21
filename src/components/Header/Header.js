import React from "react";
import Logo from "./Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import Button from "../Button/Button";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">
        <Logo />
        <Button className="boss-page-header__search">
          <FontAwesomeIcon
            className="boss-page-header__search-icon"
            icon={faSearch}
          />
        </Button>
        <Button className="boss-page-header__profile">
          <FontAwesomeIcon
            className="boss-page-header__profile-icon"
            icon={faUserCircle}
          />
        </Button>
      </div>
    </div>
  );
};

export default Header;
