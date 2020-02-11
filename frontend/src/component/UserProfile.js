import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car2.jpg";

import Footer from "./components/footer"
class UserProfile extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="userprof">
          <div class="formprofile">
        <h2>
          <Link to="/" title="Move to home page" className="menulinking">
            Ride my way
          </Link>
        </h2>
        <img src="car5.jpg" width="40%" height="100px" />
        <form className="userpr">
        
        <h3>John Doe</h3>
        <p>Enterpreneur</p>
        <p>Arusha Tanzania</p>
       
        
       
        </form>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default UserProfile;
