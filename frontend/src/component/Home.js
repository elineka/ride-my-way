import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image from "./image/car.jpg";
class Home extends Component {
  render() {
    return (
      <div className="spacecover1">
        <ul className="menu">
          <li>
            <Link to="" className="menuitem" title="Move to home page">
              <h>Ride my way</h>
            </Link>
          </li>
          <div className="arrow">
            <li>
              <HashLink
                to="./#offerride"
                className="arr"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Offer a ride<span> &#8594;</span>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="./#findride"
                className="arr"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Find a ride<span> &#8594;</span>
              </HashLink>
            </li>
          </div>
          <nav class="navi">
            <li>
              <Link to="/register" className="button1">
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/login" className="button1">
                Login
              </Link>
            </li>
          </nav>
        </ul>

        <div className="imag">
          <img src={image} />
        </div>
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
        <div className="spacecover2">
          <section id="offerride" className="offerride">
            <h3>Enter your detail to offer a ride</h3>
            <form>
              <h5>Leaving from</h5>
              <input type="text" name="leavingfrom" />
              <h5> Going to</h5>
              <input type="text" name="goingto" />
              <input type="datetime-local" name="bdaytime" />
              <input type="submit" />
            </form>
          </section>
        </div>
        <div className="spacecover3">
          <section id="findride" className="findride">
            <h3>Enter your detail to find a ride</h3>
            <form>
              <h5>Pickup</h5>
              <input type="text" name="pickup" />
              <h5>Dropoff</h5>
              <input type="text" name="dropoff" />
              <input type="datetime-local" name="bdaytime" />
              <input type="submit" />
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
