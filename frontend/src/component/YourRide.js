import React, { Component } from "react";

class YourRide extends Component {
  render() {
    return (
      <div className="">
        <h1>Choose your ride:</h1>
        <br />
        <br />
        <div className="chooseride">
          <div className="container">
            <section className="car">
              <h2>Toyota IST 4SEATS</h2>
              <img src="" alt="Toyota IST 4SEATS" className="image" />
              <div className="text">
                {" "}
                <input type="submit" value="Confirm" />
              </div>
            </section>
            <section className="car">
              <h2>White Passo 4SEATS</h2>
              <img src="" alt="White Passo 4SEATS" class="image" />
              <div className="text">
                {" "}
                <input type="submit" value="Confirm" />
              </div>
            </section>
            <p id="moving" />
          </div>
        </div>
      </div>
    );
  }
}
export default YourRide;
