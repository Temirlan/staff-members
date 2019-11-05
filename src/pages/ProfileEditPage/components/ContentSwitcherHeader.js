import React from "react";

const ContentSwitcherHeader = props => {
  return (
    <header className="boss-content-switcher__header">
      <h2 className="boss-content-switcher__title">{props.title}</h2>
    </header>
  );
};

export default ContentSwitcherHeader;
