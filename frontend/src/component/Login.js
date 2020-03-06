import React, { Component } from "react";


class Login extends Component {
 
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
    event.preventDefault();
   this.props.history.push("/driverprofile");
   }
   handleClick() {
  
    console.log('clicked');
   
  }

  render() {
    return (
     
      <div className="login">
        
        <section className="loginform" >
          <form onSubmit={this.handleSubmit}>
            <h1>Log in</h1>
            <hr />
            <label for="username">
              <b>Username </b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username" onChange = {(event,newValue) => this.setState({username:newValue})}
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw" onChange = {(event,newValue) => this.setState({password:newValue})}
              required
            />

          
            <hr />.
 <button onClick={this.handleClick}>Login</button>
            
              

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
