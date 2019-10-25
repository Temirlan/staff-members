import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

import { fetchProfileById } from "../../redux/actions";
import ProfilePageDashboard from "./components/ProfilePageDashboard";
import { getStaffMember } from "../../redux/selectors";

import DetailsList from "./components/DetailsList";

class ProfilePage extends React.Component {
  componentDidMount = () => {
    this.props.onFetchProfile(this.props.match.params.idUser);
  };

  render = () => {
    return (
      <div className="boss-page-main">
        <ProfilePageDashboard staffMember={this.props.staffMember} />

        <ContentWrapper>
          <div className="boss-page-main__flow">
            <DetailsList staffMember={this.props.staffMember} />
          </div>
        </ContentWrapper>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: idStaffMember => {
      dispatch(fetchProfileById(idStaffMember));
    }
  };
};

ProfilePage.propTypes = {
  staffMember: PropTypes.object,
  onFetchProfile: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
