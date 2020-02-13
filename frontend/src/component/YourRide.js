import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Offerride from "./components/Offerride";
import Findride from "./components/findride";
class YourRide extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/" title="Move to home page" className="menulinking">
            Ride my way
          </Link>
        </h2>
        
        


        
        <Findride />
      </div>
    );
  }
}
export default YourRide;
