import React from "react";

const Header = props => {
  return (
    <div className="boss-page-header">
      <div className="boss-page-header__inner">{props.children}</div>
    </div>
  );
};

export default Header;
