import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car2.jpg";

import Footer from "./components/footer"
class UserProfile extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="userprof">
        <h2>
          <Link to="/" title="Move to home page" className="menulinking">
            Ride my way
          </Link>
        </h2>
        <form className="userpr">
        <h2>Ride my way User Profile</h2>
        <Link to=""></Link>
       
        </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default UserProfile;
