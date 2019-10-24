import React from "react";
import { connect } from "react-redux";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import StaffMembersCount from "./components/StaffMembersCount";
import StaffMembersTable from "./components/StaffMembersTable";
import StaffMembersDashboard from "./components/StaffMembersDashboard";

import { fetchData } from "../../redux/actions";
import { staffMembersSelector, getStaffMembers } from "../../redux/selectors";

class StaffMembersPage extends React.Component {
  componentDidMount = () => {
    this.props.onFetchData();
  };

  render = () => {
    return (
      <div className="boss-page-main">
        <StaffMembersDashboard count={this.props.count} title="Staff members" />
        <ContentWrapper>
          <StaffMembersTable staffMembers={this.props.staffMembers} />
          <StaffMembersCount count="4" totalCount="132" />
        </ContentWrapper>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    count: staffMembersSelector(state).length,
    staffMembers: getStaffMembers(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffMembersPage);
