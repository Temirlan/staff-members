import React from "react";

const DetailPointer = props => {
  return (
    <p class="boss-details__pointer">
      <span class="boss-details__pointer-text">{props.number}</span>
    </p>
  );
};

export default DetailPointer;
