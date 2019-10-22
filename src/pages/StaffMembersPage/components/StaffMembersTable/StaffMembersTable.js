import React from "react";
import TableRowHeader from "./TableRowHeader/TableRowHeader";

const StaffMembersTable = props => {
  const renderTableRowList = () => {
    return React.cloneElement(props.renderTableRowList());
  };

  return (
    <div className="boss-table boss-table_page_staff-members-index">
      <TableRowHeader />
      {renderTableRowList()}
    </div>
  );
};

export default StaffMembersTable;
