import React, { Component } from "react";
import { Link } from "react-router-dom";

class YourRide extends Component {
  render() {
    return (
      <div className="">
        <h1>Choose your ride:</h1>
        <br />><br />>
        <div className="chooseride">
          <div className="container">
            <h2>Toyota IST 4SEATS</h2>
            <img src="" alt="Toyota IST 4SEATS" className="image" />
            <div className="text">
              {" "}
              <input type="submit" value="Confirm" />
            </div>

            <h2>White Passo 4SEATS</h2>
            <img src="" alt="White Passo 4SEATS" class="image" />
            <div className="text">
              {" "}
              <input type="submit" value="Confirm" />
            </div>
            <p id="moving" />
          </div>
        </div>
      </div>
    );
  }
}
export default YourRide;
