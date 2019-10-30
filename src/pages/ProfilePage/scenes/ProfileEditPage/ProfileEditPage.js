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

import { fetchProfileById } from "../../../../redux/actions";

class ProfileEditPage extends React.Component {
  componentDidMount = () => {
    this.props.onFetchProfile(this.props.match.params.idUser);
  };

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
    staffTypes: staffTypesSelector(state),
    staffMemberEdit: state.staffMemberEdit
  };
};

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
)(ProfileEditPage);
