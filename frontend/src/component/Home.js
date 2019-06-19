import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image from "./image/car.jpg";
class Home extends Component {
  render() {
    return (
      <div>
      <div className="menu">
            <div className="head"><span><Link to="" className="menuitem" title="Move to home page">
              Ride my way
            </Link></span></div>
          <div className="arrow">
            <ul>
            <li>
              <HashLink
                to="./#offerride"
                className="arr"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
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
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Find a ride<span> &#8594;</span>
              </HashLink>
            </li>
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
            </ul>
          </div>
          </div>
        <div className="imag">
        <div className="afterimg">
          <ul>
        <li>
          <Link to="/yourride" className="menuit">
            Your ride
          </Link>
        </li>
        <li>
          <Link to="/userprofile" className="menuit">
            User Profile
          </Link>
        </li></ul>
        </div>
        </div>
       
        <div className="spacecover2" id="offerride">
          <section className="offerride">
            <h2>Enter your detail to offer a ride</h2>
            <form>
              <label for="leavingfrom">Leaving from</label>
              <input type="text" name="leavingfrom" />
              <label for="goingto"> Going to</label>
              <input type="text" name="goingto" />
              <input type="datetime-local" name="time" />
              <input type="submit" />
            </form>
          </section>
        </div>
        <div className="spacecover3" id="findride">
          <section className="findride">
            <h2>Enter your detail to find a ride</h2>
            <form>
              <label for="pickup">Pickup</label>
              <input type="text" name="pickup" />
              <label for="dropoff">Dropoff</label>
              <input type="text" name="dropoff" />
              <input type="datetime-local" name="bdaytime" />
              <input type="submit" />
            </form>
          </section>
        </div>
        <footer>
          <div>
           &copy;All right reserved
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;
