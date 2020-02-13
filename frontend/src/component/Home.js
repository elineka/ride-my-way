import React, { Component } from "react";
import { Link } from "react-router-dom";

// import image from "./image/car.jpg";

//components
import Header from "./components/Header";
import Footer from "./components/footer";


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Footer />
      </div>
    );
  }
}
export default Home;
