import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./components/footer";
class Loginopt extends Component {
    render() {
      return (
        <div>
          <Navigation />

    <ul className="arrowsign">
   <li> <Link to="/driverlogin" className="arrsign">Log in to Drive<span> &#8594;</span></Link></li>
   <li> <Link to="/riderlogin" className="arrsign">Log in to Ride<span> &#8594;</span></Link></li>
    </ul>

             <Footer />
        </div>
      );
    }
  }
  export default Loginopt;