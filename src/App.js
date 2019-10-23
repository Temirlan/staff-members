import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import StaffMembersPageContainer from "./containers/StaffMembersPageContainer";
import ProfilePageContainer from "./containers/ProfilePageContainer";

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/staff_members">
                <StaffMembersPageContainer />
              </Route>
              <Route path="/staff_members/:idUser/profile">
                <ProfilePageContainer />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  };
}

export default App;
