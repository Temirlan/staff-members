import React from "react";
import { connect } from "react-redux";

import { fetchData } from "../redux/actions";
import StaffMembersPage from "../pages/StaffMembersPage/StaffMembersPage";

class StaffMembersPageContainer extends React.Component {
  componentDidMount = () => {
    this.props.onFetchData();
  };

  render = () => {
    return <StaffMembersPage />;
  };
}

const mapStateToProps = () => ({});

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
)(StaffMembersPageContainer);
