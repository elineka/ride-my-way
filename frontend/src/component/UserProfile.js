import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car2.jpg";

import Footer from "./components/footer";
class UserProfile extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/" title="Move to home page" className="menulinking">
            Ride my way
          </Link>
        </h2>
        <div className="userprof">
          <img src="car5.jpg" width="10px" />

          <h3>John Doe</h3>
          <div className="userprofiled">
            <ul>
              <li>
                <Link to="/yourtrips" className="trips">
                  Your trips
                </Link>
              </li>
              <li>
                <Link to="/payment" className="payment">
                  Payment
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="userempty"></div>
        <Footer />
      </div>
    );
  }
}
export default UserProfile;
