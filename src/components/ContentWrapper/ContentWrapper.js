import React from "react";
import PropTypes from "prop-types";

const ContentWrapper = props => {
  return (
    <div className="boss-page-main__content">
      <div className="boss-page-main__inner">{props.children}</div>
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default ContentWrapper;
