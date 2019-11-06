import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DetailSubjectsItem = props => {
  const labelClass = classNames("boss-details__label", {
    [props.classLabel]: props.classLabel
  });

  const valueClass = classNames("boss-details__value", {
    [props.classValue]: props.classValue
  });

  return (
    <li className="boss-details__item">
      <p className={labelClass}>{props.label}</p>
      <p className={valueClass}>{props.value ? props.value : props.children}</p>
    </li>
  );
};

DetailSubjectsItem.propTypes = {
  classLabel: PropTypes.string,
  classValue: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.element
};

export default DetailSubjectsItem;
