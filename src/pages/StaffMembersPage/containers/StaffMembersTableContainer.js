import React from "react";
import { connect } from "react-redux";
import StaffMembersTable from "../components/StaffMembersTable/StaffMembersTable";
import { getStaffMembers } from "../../../redux/selectors";
import TableRowList from "../components/StaffMembersTable/TableRowList/TableRowList";

const StaffMembersTableContainer = props => {
  return (
    <StaffMembersTable
      renderTableRowList={() => (
        <TableRowList staffMembers={props.staffMembers} />
      )}
    />
  );
};

const mapStateToProps = state => {
  return {
    staffMembers: getStaffMembers(state)
  };
};

export default connect(
  mapStateToProps,
  {}
)(StaffMembersTableContainer);
