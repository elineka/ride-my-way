import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="menu">
        <a href="" class="menuitem" title="Move to home page">
          Home
        </a>

        
        <a href="/userprofile" class="menuitem">
          User Profile
        </a>
        <nav class="navi">
          <Link to="/register" className="button">
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
