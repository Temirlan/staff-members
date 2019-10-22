import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as axios from "axios";

import { URL_API, AUTN_TOKEN } from "./config";

import StaffMembersPage from "./pages/StaffMembersPage/StaffMembersPage";
import Header from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import { initialLoad } from "./redux/actions";

class App extends React.Component {
  componentDidMount = () => {
    axios
      .get(URL_API, {
        headers: {
          Authorization: "Token token=" + AUTN_TOKEN
        }
      })
      .then(response => {
        this.props.initialLoad(response.data);
      });
  };

  render = () => {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/staff_members">
                <StaffMembersPage />
              </Route>
              <Route path="/staff_members/:idUser">
                <ProfilePage />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  initialLoad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
