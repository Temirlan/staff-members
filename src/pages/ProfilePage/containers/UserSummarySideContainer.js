import React from "react";
import { connect } from "react-redux";
import UserSummarySide from "../components/DashboardGroup/UserSummarySide/UserSummarySide";
import { staffMemberSelector } from "../../../redux/selectors";

class UserSummarySideContainer extends React.Component {
  render = () => {
    return <UserSummarySide staffMember={this.props.staffMember} />;
  };
}

const mapStateToProps = state => ({
  staffMember: staffMemberSelector(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSummarySideContainer);
