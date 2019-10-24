import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import StaffMembersPage from "./pages/StaffMembersPage/StaffMembersPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

class App extends React.Component {
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

export default App;
