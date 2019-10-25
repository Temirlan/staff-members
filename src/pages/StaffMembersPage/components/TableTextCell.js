import React from "react";
import PropTypes from "prop-types";

const TableTextCell = props => {
  return (
    <div className="boss-table__cell">
      <div className="boss-table__info">
        <p className="boss-table__label">{props.label}</p>
        <p className="boss-table__text">{props.children}</p>
      </div>
    </div>
  );
};

TableTextCell.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default TableTextCell;
