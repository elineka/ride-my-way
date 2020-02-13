import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signuprider from "./component/Signuprider";
import YourRide from "./component/YourRide";
import Riderlogin from "./component/Riderlogin";
import UserProfile from "./component/UserProfile";
import Signupopt from "./component/Signupopt";
import Navigation from "./component/Navigation";
import Signupdriver from "./component/Signupdriver";
import Driverlogin from "./component/Driverlogin";
import Loginopt from "./component/Loginopt";
import Yourtrips from "./component/Yourtrips";

import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/signuprider" component={Signuprider} />
        <Route path="/riderlogin" component={Riderlogin} />
        <Route path="/yourride" component={YourRide} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/signupopt" component={Signupopt} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/signupdriver" component={Signupdriver} />
        <Route path="/driverlogin" component={Driverlogin} />
        <Route path="/loginopt" component={Loginopt} />
        <Route path="/yourtrips" component={Yourtrips} />
      </div>
    </Router>
  );
}

export default App;
