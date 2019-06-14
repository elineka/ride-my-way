import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <ul className="menu">
         
          <li>
            <Link to="" className="menuitem" title="Move to home page">
              <h2>Ride my way</h2>
            </Link>
          </li>
          <li>
            <Link to="/yourride" className="menuitem">
              Your ride
            </Link>
          </li>
          <li>
            <Link to="/userprofile" className="menuitem">
              User Profile
            </Link>
          </li>
          <div className="arrow">
            <li>
              <Link to="/register" className="arr">
                Offer a ride<span> &#8594;</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="arr">
                Find a ride<span> &#8594;</span>
              </Link>
            </li>
          </div>
          <nav class="navi">
            <li>
              <Link to="/register" className="button">
                Sign up
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/login" className="button">
                Login
              </Link>
            </li>
          </nav>
        </ul>

        <div>
          <img src={image} />
        </div>
      </div>
    );
  }
}
export default Home;
