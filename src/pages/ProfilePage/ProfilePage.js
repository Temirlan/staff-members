import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Dashboard from "../../components/Dashboard/Dashboard";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DashboardProfile from "./components/DashboardProfile/DashboardProfile";
import FlowWrapper from "./components/FlowWrapper/FlowWrapper";

import { fetchProfileById } from "../../redux/actions";

class ProfilePage extends React.Component {
  componentDidMount = () => {
    this.props.onFetchProfile(this.props.match.params.idUser);
  };

  render = () => {
    return (
      <div className="boss-page-main">
        <Dashboard>
          <DashboardProfile />
        </Dashboard>
        <ContentWrapper>
          <FlowWrapper />
        </ContentWrapper>
      </div>
    );
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
)(withRouter(ProfilePage));
