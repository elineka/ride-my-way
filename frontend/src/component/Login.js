import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
   this.setState({loggedIn:true}) 
  }
  render() {
    return (
     
      <div className="login">
        <section className="loginform">
          <form>
            <h1>Log in as a Driver</h1>
            <hr />
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
            <button type="submit" class="login">
              Log in
            </button>
            <button type="button" class="cancelbtn">
              Cancel
            </button>
          </form>
        </section>

        <section className="loginform">
          <form>
            <h1>Log in as a Rider</h1>
            <hr />
            <label for="email">
              <b>Email {this.props.email}</b>
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
            <hr />.
<Link to="/userprofile"><input type="button" value="Log in" onClick={this.loginHandle.bind(this)}/></Link>
            
              

            <button type="button" class="cancelbtn">
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}
export default Login;
