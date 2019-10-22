import React from "react";

const TableRowHeader = props => {
  return (
    <div className="boss-table__row">
      <div className="boss-table__cell boss-table__cell_role_header"></div>
      <div className="boss-table__cell boss-table__cell_role_header">Name</div>
      <div className="boss-table__cell boss-table__cell_role_header">
        Status
      </div>
      <div className="boss-table__cell boss-table__cell_role_header">Type</div>
      <div className="boss-table__cell boss-table__cell_role_header">
        Master Venue
      </div>
    </div>
  );
};

export default TableRowHeader;
