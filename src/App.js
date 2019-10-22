import React from "react";
import StaffMembersPage from "./pages/StaffMembersPage/StaffMembersPage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
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
}

export default App;
