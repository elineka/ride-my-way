import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <div className="menuregister">
        <section className="regform">
          <form>
            <div className="container">
              <h2>Register</h2>
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
                <Link to="#">Terms & Privacy</Link>.
              </p>

              <button type="submit" className="registerbtn">
                Register
              </button>
            </div>
            <div className="container signin">
              <p>
                Already have an account? <Link to="/Login">Sign in</Link>.
              </p>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Register;
