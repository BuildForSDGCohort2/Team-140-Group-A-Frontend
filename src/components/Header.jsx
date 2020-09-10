import React, {Component} from "react";
import "../App.css";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaBeer} from "react-icons/fa";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/*  */}
        <Navbar
          expand="lg"
          className="sticky-top  navbar-dark bg_primary_light sticky-top"
        >
          <div className="container">
            {/* <FontAwesomeIcon icon="check-square" /> */}
            {/*  */}
            <FaBeer />
            {/* <Navbar.Brand href="#home">SmartHealthcare</Navbar.Brand> */}

            <Navbar.Brand href="#home">
              {/* <Link to="/home"> */}
                SmartHealthcare
              {/* </Link> */}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 focus_outline_none"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/user-account/013">
                  Account
                </NavLink>
                <NavLink className="nav-link" to="/bmi">
                  BMI test
                </NavLink>
                <NavLink className="nav-link" to="/medical-appointment">
                  Medical Appointments
                </NavLink>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item> */}
                    <NavLink
                      className="nav-link text-dark"
                      to="/user-account/012"
                    >
                      Profile
                    </NavLink>
                  {/* </NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    <button className="btn">Logout</button>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  className="btn bg-white rounded text_primary_light"
                  to="/register"
                >
                  Register
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/*  */}
      </React.Fragment>
    );
  }
}

export default Header;
