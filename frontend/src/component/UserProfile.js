import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car2.jpg";
class UserProfile extends Component {
  render() {
    return (
      <div>
         <h2><Link to="/" title="Move to home page" className="menulinking">
        Ride my way
            </Link></h2>
       
      </div>
    );
  }
}
export default UserProfile;
