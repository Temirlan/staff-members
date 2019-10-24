import React from "react";
import TableRow from "./TableRow";

const TableRowHeader = props => {
  const headers = props.headers.map((header, key) => {
    return (
      <div key={key} className="boss-table__cell boss-table__cell_role_header">
        {header}
      </div>
    );
  });

  return <div className="boss-table__row">{headers}</div>;
};

const TableRowList = props => {
  return props.staffMembers.map(staffMember => {
    return <TableRow key={staffMember.id} staffMember={staffMember} />;
  });
};

const headers = ["", "Name", "Status", "Type", "Master Venue"];

const StaffMembersTable = props => {
  return (
    <div className="boss-table boss-table_page_staff-members-index">
      <TableRowHeader headers={headers} />
      <TableRowList staffMembers={props.staffMembers} />
    </div>
  );
};

export default StaffMembersTable;
