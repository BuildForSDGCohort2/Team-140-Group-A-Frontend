import React, {Component} from "react";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <div className="inner container">
            <h1>Your Best Value Proposition</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* <a href="#" className="btn btn-lg bg_primary_dark _btn">
              Book an appointment
            </a> */}
            <Link
              className="btn btn-lg bg_primary_dark _btn hero_btn"
              to="/medical-appointment"
            >
              {" "}
              Book an appointment
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
