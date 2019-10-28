import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

import { fetchProfileById } from "../../redux/actions";
import ProfilePageDashboard from "./components/ProfilePageDashboard";
import { getStaffMember } from "../../redux/selectors";
import { Accessories, Shifts, Payments, OwedHours, Holidays } from "./scenes";

import DetailsList from "./components/DetailsList";
import * as c from "../../consts";

class ProfilePage extends React.Component {
  componentDidMount = () => {
    this.props.onFetchProfile(this.props.match.params.idUser);
  };

  render = () => {
    return (
      <div className="boss-page-main">
        <Redirect
          to={`/staff_members/${this.props.match.params.idUser}/profile`}
        />
        <ProfilePageDashboard staffMember={this.props.staffMember} />

        <Switch>
          <Route
            exact
            path={c.PATH_PROFILE}
            render={() => (
              <ContentWrapper>
                <div className="boss-page-main__flow">
                  <DetailsList staffMember={this.props.staffMember} />
                </div>
              </ContentWrapper>
            )}
          />
          <Route exact path={c.PATH_ACCESSORIES} component={Accessories} />
          <Route exact path={c.PATH_SHIFTS} component={Shifts} />
          <Route exact path={c.PATH_PAYMENTS} component={Payments} />
          <Route exact path={c.PATH_OWED_HOURS} component={OwedHours} />
          <Route exact path={c.PATH_HOLIDAYS} component={Holidays} />
        </Switch>
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
