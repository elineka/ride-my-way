import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <section className="content">
          <div className="menu">
            <h1>Ride my way</h1>
            <Navigation />
            <Footer />
          </div>

          <div class="arrow">
            <a href="/register" class="arr">
              Sign Up to Drive<span> &#8594;</span>
            </a>
            <a href="/register" class="arr">
              Sign Up to Ride<span> &#8594;</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
