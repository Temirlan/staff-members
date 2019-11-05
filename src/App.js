import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";

import StaffMembersPage from "./pages/StaffMembersPage/StaffMembersPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Logo from "./components/Logo/Logo";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";

import * as c from "./consts";

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <Router>
          <>
            <Header>
              <>
                <Logo name="BOSS" />
                <Link
                  to="#"
                  className="boss-page-header__action boss-page-header__action_role_search"
                  data-dropdown="search"
                ></Link>
                <Link
                  to="#"
                  className="boss-page-header__action boss-page-header__action_role_profile"
                  data-dropdown="profile"
                ></Link>
              </>
            </Header>
            <Switch>
              <Route
                exact
                path={c.PATH_STAFF_MEMBERS}
                component={StaffMembersPage}
              />
              <Route path={c.PATH_PROFILE_EDIT} component={ProfileEditPage} />
              <Route path={c.PATH_PROFILE_PAGE} component={ProfilePage} />
            </Switch>
          </>
        </Router>
      </div>
    );
  };
}

export default App;
