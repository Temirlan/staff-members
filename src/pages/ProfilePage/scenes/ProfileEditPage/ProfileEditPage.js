import React from "react";
import { connect } from "react-redux";
import ProfileEditDashboard from "./components/ProfileEditDashboard";
import ProfileEditContent from "./components/ProfileEditContent";
import {
  getStaffMember,
  payRatesSelector,
  venuesSelector,
  staffTypesSelector
} from "../../../../redux/selectors";

class ProfileEditPage extends React.Component {
  render = () => {
    return (
      <div className="boss-page-main">
        <ProfileEditDashboard
          title="Edit Profile"
          editCancel="Cancel Editing"
        />
        <ProfileEditContent
          payRates={this.props.payRates}
          venues={this.props.venues}
          staffTypes={this.props.staffTypes}
          staffMember={this.props.staffMember}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state),
    payRates: payRatesSelector(state),
    venues: venuesSelector(state),
    staffTypes: staffTypesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditPage);
