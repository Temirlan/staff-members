import React from "react";

const DetailSubjectsItem = props => {
  return (
    <li class="boss-details__item">
      <p class="boss-details__label">{props.label}</p>
      <p class="boss-details__value">{props.value}</p>
    </li>
  );
};

export default DetailSubjectsItem;
