import React, {Component} from "react";
import "../App.css";
import {Link} from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="register_page custom_background_img">
          <div className="main_inner_wrapper container">
            <div className="inner">
              <div className="form_wrapper p-4 shadow">
                <h5 className="text-center my-3">Register</h5>
                {/* <!-- form --> */}
                <form action="#">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-8 col-md-8">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="form-group col-4 col-md-4">
                      <label htmlFor="gender">Gender</label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select id="inputGender" className="form-control">
                          <option defaultValue="male" value>
                            Male
                          </option>
                          <option defaultValue="female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="state">State</label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select id="inputState" className="form-control">
                          <option defaultValue="abuja" value>
                            Abuja
                          </option>
                          <option defaultValue="lagos">Lagos</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-6">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                      <small id="" className="form-text text-danger">
                        Error message else.
                      </small>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block bg_primary_dark _btn"
                  >
                    Register
                  </button>
                  <small id="" className="form-text text-dark">
                    <span>Already have an account?</span>&nbsp;
                    <strong>
                      <Link className="regular_link" to="/login">
                        Login
                      </Link>
                    </strong>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
