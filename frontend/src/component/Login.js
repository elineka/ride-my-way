import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form>
          <h1>Log in as a Driver</h1>
          <hr />
          <input type="text" placeholder="Enter Email" name="email" required />

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
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </form>

        <form>
          <h1>Log in as a Rider</h1>
          <hr />
          <input type="text" placeholder="Enter Email" name="email" required />

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
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </form>
      </div>
    );
  }
}
export default Login;
