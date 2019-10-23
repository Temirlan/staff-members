import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { fetchProfileById } from "../redux/actions";

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    this.props.onFetchProfile(this.props.match.params.idUser);
  };

  render = () => {
    return <ProfilePage />;
  };
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: idStaffMember => {
      dispatch(fetchProfileById(idStaffMember));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePageContainer));
