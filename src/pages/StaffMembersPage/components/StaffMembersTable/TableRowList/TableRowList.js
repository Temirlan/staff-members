import React from "react";
import TableRow from "../TableRow/TableRow";
import TableImageCell from "../TableImageCell/TableImageCell";

const TableRowList = props => {
  return props.staffMembers.map(staffMember => {
    return (
      <TableRow
        key={staffMember.id}
        staffMember={staffMember}
        renderTableImageCell={() => (
          <TableImageCell staffMember={staffMember} />
        )}
      />
    );
  });
};

export default TableRowList;
