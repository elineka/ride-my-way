import React, { Component } from "react";
import { Link } from "react-router-dom";
class Driverprofile extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: '',
      destination: '',
      price: ''
   
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.from + this.state.destination + this.state.price);
  }

 
    myChangeHandler = (event) => {
     let nam = event.target.name;
     let val = event.target.value;
      this.setState({[nam]: val});
    
  
  }


  render() {
    return (
      <div className="">
        <h1>Choose your ride:</h1>
        
        <form onSubmit={this.mySubmitHandler}>

        <h1>{this.state.from}   <br /> {this.state.destination}   <br /> {this.state.price}</h1>

          
            <label for="From ">
              <b>From </b>
            </label>
            <input
              type="text"
              placeholder="Source"
              name="from"
              onChange={this.myChangeHandler}
            />

            <label for="Destination">
              <b>Destination</b>
            </label>
            <input
              type="text"
              placeholder="Your destination"
              name="destination"
              onChange={this. myChangeHandler}
            />

<label for="Price">
              <b>Price</b>
            </label>
            <input
              type="number"
              placeholder="Our price"
              name="price"
              onChange={this. myChangeHandler}
            />
     <input type="submit" value="Submit"   /> 
   
            </form>
            
            
      </div>
    );
  }
}
export default Driverprofile;
