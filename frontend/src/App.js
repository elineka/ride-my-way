import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./component/Register";
import YourRide from "./component/YourRide";
import Login from "./component/Login";
import "./App.css";
import Home from "./component/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/YourRide" component={YourRide} />
      </div>
    </Router>
  );
}

export default App;
