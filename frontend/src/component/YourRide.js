import React, { Component } from "react";

class YourRide extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: localStorage.getItem('from'),
      destination: localStorage.getItem('destination'),
      price: localStorage.getItem('price')
   
    };
  }

  
    
  
 

 


  render() {
    return (
      <div className="">
     
     <h1>Choose your ride: <br />

  <ol>
    <li> From: {this.state.from}<br />Destination: {this.state.destination} <br /> Price: {this.state.price} </li>
    
  </ol>

           </h1>

     
  


   
      </div>
    );
  }
}
export default YourRide;
