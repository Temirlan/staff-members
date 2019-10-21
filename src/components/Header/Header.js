import React from "react";
import Logo from "./Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import Button from "../Button/Button";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">
        <Logo />
        <Button className="boss-page-header__action boss-page-header__action_role_search">
          Search
        </Button>
        <Button className="boss-page-header__action boss-page-header__action_role_profile">
          Profile
        </Button>
      </div>
    </div>
  );
};

export default Header;
