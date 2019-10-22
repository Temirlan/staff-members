import React from "react";

const Content = props => {
  return (
    <div className="boss-page-main__content">
      <div className="boss-page-main__inner">{props.children}</div>
    </div>
  );
};

export default Content;
