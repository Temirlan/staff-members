import React from "react";
import { connect } from "react-redux";

import ProfileEditDashboard from "./components/ProfileEditDashboard";
import ProfileEditContent from "./components/ProfileEditContent";
import * as s from "../../../../redux/selectors";
import * as a from "../../../../redux/actions";

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
          staffMember={this.props.staffMember}
          venues={this.props.venues}
          staffTypes={this.props.staffTypes}
          onUpdateEmploymentDeatails={this.props.onUpdateEmploymentDeatails}
          onUpdatePersonalDetails={this.props.onUpdatePersonalDetails}
          onUpdateContactDetails={this.props.onUpdateContactDetails}
          genderValues={this.props.genderValues}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    staffMember: s.getStaffMember(state),
    payRates: s.payRatesSelector(state),
    venues: s.venuesSelector(state),
    genderValues: s.genderValuesSelector(state),
    staffTypes: s.staffTypesSelector(state),
    staffMemberEdit: state.staffMemberEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: idStaffMember => {
      dispatch(a.fetchProfileById(idStaffMember));
    },
    onUpdateEmploymentDeatails: values => {
      return dispatch(a.updateEmploymentDeatails(values));
    },
    onUpdatePersonalDetails: values => {
      return dispatch(a.updatePersonalDetails(values));
    },
    onUpdateContactDetails: values => {
      return dispatch(a.updateContactDetails(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditPage);
