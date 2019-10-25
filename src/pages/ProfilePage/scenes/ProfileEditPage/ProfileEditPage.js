import React from "react";
import { connect } from "react-redux";
import ProfileEditDashboard from "./components/ProfileEditDashboard";

class ProfileEditPage extends React.Component {
  render = () => {
    return (
      <div className="boss-page-main">
        <ProfileEditDashboard
          title="Edit Profile"
          editCancel="Cancel Editing"
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditPage);
