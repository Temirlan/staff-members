import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StaffMembersPage from "./pages/StaffMembersPage/StaffMembersPage";
import Header from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import { fetchData } from "./redux/actions";

class App extends React.Component {
  componentDidMount = () => {
    this.props.onFetchData();
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
              <Route path="/staff_members/:idUser/profile">
                <ProfilePage />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  };
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
