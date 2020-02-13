import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./components/footer";
class Signupopt extends Component {
    render() {
      return (
        <div>
          <Navigation />

    <ul className="arrowsign">
   <li> <Link to="/signupdriver" className="arrsign">Sign Up to Drive<span> &#8594;</span></Link></li>
   <li> <Link to="/Signuprider" className="arrsign">Sign Up to Ride<span> &#8594;</span></Link></li>
    </ul>

             <Footer />
        </div>
      );
    }
  }
  export default Signupopt;