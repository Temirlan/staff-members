import React from "react";

const TableTextCell = props => {
  return (
    <div class="boss-table__cell">
      <div class="boss-table__info">{props.children}</div>
    </div>
  );
};

export default TableTextCell;
