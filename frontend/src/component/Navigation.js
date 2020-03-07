import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="" class="menuitem" title="Move to home page">
          Home
        </Link>
        <Link to="/yourride" class="menuitem">
          Your Ride
        </Link>
        
        <Link to="/driverprofile" class="menuitem">
          Driver Profile
        </Link>
        <nav class="navi">
          <Link to="" className="button">
            Sign up
          </Link>

          <Link to="/login" className="button">
            Login
          </Link>
        </nav>
      </div>
    );
  }
}
export default Navigation;
