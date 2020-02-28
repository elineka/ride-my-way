import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div class="profile">
        <section className="prf">
          {" "}
          <h2>User Profile </h2>
          <div>
            <img src="/img.jpg" alt="John" />
            <h2>John Doe</h2>
            <p>Tabata, Dar es salaam</p>
            <p>
              <button>Contact</button>
            </p>
          </div>
        </section>
        <section className="prf">
          {" "}
          <h2>User Profile </h2>
          <div>
            <img src="/img.jpg" alt="Eve" />
            <h2>Eve Michael</h2>
            <p>Mikocheni, Dar es salaam</p>
            <p>
              <button>Contact</button>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default UserProfile;
