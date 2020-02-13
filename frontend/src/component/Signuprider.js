import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signuprider extends Component {
  
  render() {
    return (
      <div className="menuregister">
        
        <section className="regform">
          <form>
            <div className="container">
            <h2><Link to="/" title="Move to home page" className="menulinking">
        Ride my way
            </Link></h2>
              <h3>Sign Up as a Rider</h3>
             
              <p>Please fill in this form to create an account.</p>

              <label for="firstName">
                First name
              </label>
              <input
                className="register"
                type="text"
                placeholder="Enter First name"
                name="firstName"
                required
              />
              <label for="lastName">
                Last Name
              </label>
              <input
                className="register"
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                required
              />
              <label for="email">
                Email
              </label>
              <input
                className="register"
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label for="psw">
                Password
              </label>
              <input
                className="register"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <label for="psw-repeat">
                Repeat Password
              </label>
              <input
                className="register"
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />

              <p>
                By creating an account you agree to our&nbsp;
                <Link to="#">Terms & Privacy</Link>
              </p>

              <button type="submit" className="registerbtn">
                Register
              </button>
            </div>
            <div className="container signin">
              <p>
                Already have an account? <Link to="/Login">Sign in</Link>
              </p>
            </div>
          </form>
        </section>
        
      </div>
    );
  }
}
export default Signuprider;
