import React, { Component } from "react";
import { Link } from "react-router-dom";
class YourRide extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/" title="Move to home page" className="menulinking">
            Ride my way
          </Link>
        </h2>
        <div class="offer">
          <div class="yourride">
            <form>
              <h3>Add ride offer</h3>
              <label>Full Name</label>
              <input type="text" name="Name" placeholder="Enter your name" />
              <label>Car type</label>
              <input type="text" name="Car" placeholder="Car types" />
              <label> Number of seats</label>
              <input
                type="number"
                name="Seats"
                placeholder="Enter your number"
              />{" "}
              <br />
              <br />
              <label>Location</label>
              <input type="text" name="Location" placeholder="Where are you?" />
              <label>Going to</label>
              <input
                type="text"
                name="Goingto"
                placeholder="Where are you going?"
              />
              <label> Email</label>
              <input type="email" name="Email" placeholder="Enter your email" />
              <label> Phone number</label>
              <input
                type="number"
                name="Contact"
                placeholder="Enter your number"
              />
              <br />
              <br />
              <label>Time of leaving</label>
              <input type="time" name="Time" placeholder="Time of leaving" />
              <button>Add ride offer</button>
            </form>
          </div>

          <div class="availableride">
            <h3>View available ride</h3>
            <p>Car type Toyota IST</p>
            <p>No of seats</p>
            <p>From Mwenge to Mbezi Beach</p>
            <p>Time of leaving</p>
            <button>Confirm ride</button><br/>
            <h3>Driver view request to the ride offer</h3>
            <p>Name, No of seats, Pickup and Dropoff</p>
            <button>Driver confirm Pickup</button>
          </div>
        </div>
      </div>
    );
  }
}
export default YourRide;
