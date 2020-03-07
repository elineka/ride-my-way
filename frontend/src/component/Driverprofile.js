import React, { Component } from "react";

class Driverprofile extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: '',
      destination: '',
      price: ''
     
  
    };
    this.handleClickOut = this.handleClickOut.bind(this);
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    
    let { from, destination, price } = this.state;
    localStorage.setItem('from', from);
    localStorage.setItem('destination', destination);
    localStorage.setItem('price', price );


     from= this.state.from;
     destination = this.state.destination;
    price = this.state.price;
    let path = `yourride`;
    this.props.history.push(path);
   
    
    
}

 
    myChangeHandler = (event) => {
     let nam = event.target.name;
     let val = event.target.value;
     this.setState({[nam]: val});
  
  }

  handleClickOut() {
    //this.props.clickHandler();
    console.log('clicked');
    this.props.history.push("/login");
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
              name="from" ref={input => (this.from = input)}
              onChange={this.myChangeHandler}
            />

            <label for="Destination">
              <b>Destination</b>
            </label>
            <input
              type="text"
              placeholder="Your destination"
              name="destination" ref={input => (this.destination = input)} 
              onChange={this.myChangeHandler}
            />

<label for="Price">
              <b>Price</b>
            </label>
            <input
              type="number"
              placeholder="Our price"
              name="price" ref={input => (this.price = input)} 
              onChange={this.myChangeHandler}
            />
 <input type="submit" value="Submit"  />
 
 
 
            </form>
            <hr />
            <button onClick={this.handleClickOut}>Log Out</button>
            
      </div>
    );
  }
}
export default Driverprofile;
