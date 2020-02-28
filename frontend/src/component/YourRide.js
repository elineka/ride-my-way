import React, { Component } from "react";
import Driverprofile from './Driverprofile'
class YourRide extends Component {
  render() {
    return (
      <div className="">
    <div>
      <h3>Your previous trips</h3>
<ol>
  <li>25/11/19, 18:50 <br/>Toyota IST <br/> TZ5,073</li><br/><br/><br/>
  <li>11/11/19, 18:50 <br/>TVS King <br/> TZ3,000</li>
  
</ol>

    </div>
    <div>
    <h3>Available current trips</h3>
    <ol>
  <li>28/02/19, 18:50 <br/>From: Morocco <br/>To: Tegeta <br/>Toyota IST <br/> TZ5,000</li>
  
</ol>
    </div>
      </div>
    );
  }
}
export default YourRide;
