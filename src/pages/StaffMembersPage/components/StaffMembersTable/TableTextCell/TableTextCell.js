import React from "react";

const TableTextCell = props => {
  return (
    <div className="boss-table__cell">
      <div className="boss-table__info">{props.children}</div>
    </div>
  );
};

export default TableTextCell;
