import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login">
        
        <form className="loginform">
        <h2><Link to="/" title="Move to home page" className="menulinking">
        Ride my way
            </Link></h2>
        
          
          <div className="container">
          <h3>Login into Ride my way</h3>
          <select className="selec">
            <option value="driver">
              Driver
            </option>
            <option value="rider">
              Rider
            </option>
          </select>
            <label for="email">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="username"
              required
            />
            <label for="psw">
              Password
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
          <div className="container signin">
              <p>
                Create new account <Link to="/Register">Sign up</Link>
              </p>
            </div>
        </form>
      </div>
    );
  }
}
export default Login;
