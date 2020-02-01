import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import image from "./image/car.jpg";

//components
import Header from "./components/Header";
import Footer from "./components/footer";
import Offerride from "./components/Offerride";
import Findride from "./components/findride";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Offerride />
        <Findride />
        <Footer />
      </div>
    );
  }
}
export default Home;
