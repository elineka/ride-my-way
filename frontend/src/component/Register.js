import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {

  render() {
    return (
      <div className="menuregister">
        <section className="regform">
          <form>
            <div className="container">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />

              <label for="firstName">
                <b>First name</b>
              </label>
              <input
                type="text"
                placeholder="Enter First name"
                name="firstName"
                required
              />
              <label for="lastName">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                required
              />
              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <label for="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />
              <hr />
              <p>
                By creating an account you agree to our{" "}
                <a href="#">Terms & Privacy</a>.
              </p>

              <Link to="login"><button type="submit" class="registerbtn">
                Register
              </button></Link>
            </div>
          </form>
        </section>
        
      </div>
    );
  }
}
export default Register;
