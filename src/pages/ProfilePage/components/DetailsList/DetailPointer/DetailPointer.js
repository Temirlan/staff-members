import React from "react";

const DetailPointer = props => {
  return (
    <p className="boss-details__pointer">
      <span className="boss-details__pointer-text">{props.number}</span>
    </p>
  );
};

export default DetailPointer;
