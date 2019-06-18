import React, { Component } from "react";
import image from "./image/car2.jpg";
class UserProfile extends Component {
  render() {
    return (
      <div>
        <ul className="profile">
          <li>
            {" "}
            <h2>User Profile </h2>
            <div>
              <div>
                <img src={image} />
              </div>
              <h2>John Doe</h2>
              <p>Tabata, Dar es salaam</p>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </li>
          <li>
            {" "}
            <h2>User Profile </h2>
            <div>
              <div>
                <img src={image} />
              </div>
              <h2>Eve Michael</h2>
              <p>Mikocheni, Dar es salaam</p>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default UserProfile;
