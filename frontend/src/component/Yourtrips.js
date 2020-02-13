import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./image/car2.jpg";

import Footer from "./components/footer";
class Yourtrips extends Component {
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
        <div className="userempty">
            <div className="trip1">

               
                     
        <div className="pasttrip">      
<h3>Past trips</h3><br/>
<ol>
    <li>25/11/19, 18:50<br/>
Toyota IST<br/>
TZS5,073<br/><br/>
</li>
    <li>11/1119, 20:45<br/>
TVS King<br/>
TZS3,000
</li>
</ol></div> 
<h3>Upcoming trips</h3><br/>
<p>No upcoming trip</p></div>

        </div>
        
        <Footer />
      </div>
    );
  }
}
export default Yourtrips;
