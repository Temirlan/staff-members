import React from "react";

import "./Logo.css";
import Button from "../../Button/Button";

const Logo = props => {
  return (
    <div className="boss-page-header__group boss-page-header__group_role_logo">
      <Button className="boss-page-header__logo">BOSS</Button>
    </div>
  );
};

export default Logo;
