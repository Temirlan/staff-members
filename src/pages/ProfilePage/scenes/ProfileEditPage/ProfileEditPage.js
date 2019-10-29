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

import {
  fetchProfileById,
  setOptionMainVenue,
  setOptionStaffType,
  setOptionPayRate
} from "../../../../redux/actions";

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
          staffMember={this.props.staffMember}
          setOptionMainVenue={this.props.setOptionMainVenue}
          setOptionStaffType={this.props.setOptionStaffType}
          optionMainVenue={this.props.optionMainVenue}
          optionStaffTypes={this.props.optionStaffTypes}
          setOptionPayRate={this.props.setOptionPayRate}
          optionPayRates={this.props.optionPayRates}
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
    optionMainVenue: state.userInfo.optionMainVenue,
    optionStaffTypes: state.userInfo.optionStaffTypes,
    optionPayRates: state.userInfo.optionPayRates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: idStaffMember => {
      dispatch(fetchProfileById(idStaffMember));
    },
    setOptionMainVenue: selectOption => {
      dispatch(setOptionMainVenue(selectOption));
    },
    setOptionStaffType: selectOption => {
      dispatch(setOptionStaffType(selectOption));
    },
    setOptionPayRate: selectOption => {
      dispatch(setOptionPayRate(selectOption));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditPage);
