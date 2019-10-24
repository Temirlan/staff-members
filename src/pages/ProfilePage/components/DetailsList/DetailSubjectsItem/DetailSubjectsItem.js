import React from "react";

const DetailSubjectsItem = props => {
  let classLabel = "boss-details__label";
  let classValue = "boss-details__value";

  if (props.classLabel) {
    classLabel = `${classLabel} ${props.classLabel}`;
  }

  if (props.classValue) {
    classValue = `${classValue} ${props.classValue}`;
  }

  return (
    <li className="boss-details__item">
      <p className={classLabel}>{props.label}</p>
      <p className={classValue}>{props.value ? props.value : props.children}</p>
    </li>
  );
};

export default DetailSubjectsItem;
