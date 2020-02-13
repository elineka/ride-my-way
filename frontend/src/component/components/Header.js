import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (menu) => {
    return (
        <>
            <div className="menu">
          <div className="head">
            <span>
              <Link to="" className="menuitem" title="Move to home page">
                Ride my way
              </Link>
            </span>
          </div>
          <div >
          <ul className="navgncontain">
            <li><Link to="/aboutus" className="navgn">
                 About us
                </Link></li>
            <li><Link to="/services" className="navgn">
                  Services
                </Link></li>
            <li><Link to="help" className="navgn">
                 Help
                </Link></li>
          </ul>
          </div>
       
          <div className="arrow">
            <ul>
          
              <li>
                <Link to="/signupopt" className="button1">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="/loginopt" className="button1">
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
              </li>
            </ul>
          </div>
        </div>

        </>
    )
}

export default Header