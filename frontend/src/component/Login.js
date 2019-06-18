import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login into Ride my way</h2>
        <form className="loginform">
          <select>
            <option className="selec" value="driver">
              Driver
            </option>
            <option className="selec" value="rider">
              Rider
            </option>
          </select>
          <div className="container">
            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
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
            <button type="submit">Login</button>
          </div>
          <div class="container">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <Link to="#">password?</Link>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
