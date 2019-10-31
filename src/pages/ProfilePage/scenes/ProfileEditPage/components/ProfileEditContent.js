import React from "react";
import { NavLink, withRouter, Switch, Route, Redirect } from "react-router-dom";
import ContentWrapper from "../../../../../components/ContentWrapper/ContentWrapper";
import EmploymentDetails from "../scenes/EmploymentDetails";
import PersonalDetails from "../scenes/PersonalDetails";
import ContactDetails from "../scenes/ContactDetails";

import * as c from "../../../../../consts";

class ProfileEditContent extends React.Component {
  constructor(props) {
    super(props);

    this.commonUrl = `/staff_members/${this.props.match.params.idUser}/profile/edit`;
  }
  render = () => {
    return (
      <ContentWrapper>
        <div className="boss-content-switcher">
          <div className="boss-content-switcher__inner">
            <Redirect to={`${this.commonUrl}/employment_details`} />

            <aside className="boss-content-switcher__side">
              <nav className="boss-content-switcher__nav">
                <NavLink
                  to={`${this.commonUrl}/employment_details`}
                  className="boss-content-switcher__nav-link "
                  activeClassName="boss-content-switcher__nav-link_state_active"
                  data-chapter="employment"
                >
                  Employment Details
                </NavLink>
                <NavLink
                  to={`${this.commonUrl}/personal_details`}
                  className="boss-content-switcher__nav-link "
                  activeClassName="boss-content-switcher__nav-link_state_active"
                  data-chapter="personal"
                >
                  Personal Details
                </NavLink>
                <NavLink
                  to={`${this.commonUrl}/contact_details`}
                  className="boss-content-switcher__nav-link "
                  activeClassName="boss-content-switcher__nav-link_state_active"
                  data-chapter="contact"
                >
                  Contact Details
                </NavLink>
              </nav>
            </aside>

            <section className="boss-content-switcher__chapters">
              <Switch>
                <Route
                  exact
                  path={c.PATH_DEPLOYMENT_DETAILS}
                  render={() => (
                    <EmploymentDetails
                      payRates={this.props.payRates}
                      venues={this.props.venues}
                      staffTypes={this.props.staffTypes}
                      onUpdateEmploymentDeatails={
                        this.props.onUpdateEmploymentDeatails
                      }
                    />
                  )}
                />
                <Route
                  exact
                  path={c.PATH_PERSONAL_DETAILS}
                  render={() => (
                    <PersonalDetails
                      onUpdatePersonalDetails={
                        this.props.onUpdatePersonalDetails
                      }
                      genderValues={this.props.genderValues}
                    />
                  )}
                />
                <Route
                  exact
                  path={c.PATH_CONTACT_DETAILS}
                  render={() => (
                    <ContactDetails
                      onUpdateContactDetails={this.props.onUpdateContactDetails}
                    />
                  )}
                />
              </Switch>
            </section>
          </div>
        </div>
      </ContentWrapper>
    );
  };
}

export default withRouter(ProfileEditContent);
