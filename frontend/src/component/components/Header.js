import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
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
              </li>
            </ul>
          </div>
        </div>

        </>
    )
}

export default Header