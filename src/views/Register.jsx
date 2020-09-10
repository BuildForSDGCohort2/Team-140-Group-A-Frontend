import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      phone: "",
      address: "",
      state: "",
      password: "",
    };
  }
  changehandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const {
      firstname,
      lastname,
      email,
      gender,
      phone,
      address,
      state,
      password,
    } = this.state;
    return (
      <React.Fragment>
        <div className="register_page custom_background_img">
          <div className="main_inner_wrapper container">
            <div className="inner">
              <div className="form_wrapper p-4 shadow">
                <h5 className="text-center my-3">Register</h5>
                <hr className="my-2" />
                {/* <!-- form --> */}
                <form onSubmit={this.submitHandler}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        value={firstname}
                        onChange={this.changehandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        value={lastname}
                        onChange={this.changehandler}
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
                        value={email}
                        onChange={this.changehandler}
                      />
                    </div>
                    <div className="form-group col-4 col-md-4">
                      <label htmlFor="gender">Gender</label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select
                          id="inputGender"
                          className="form-control"
                          name="gender"
                          value={gender}
                          onChange={this.changehandler}
                        >
                          <option defaultValue="" value>
                            Select Gender
                          </option>
                          <option defaultValue="male">Male</option>
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
                        value={phone}
                        onChange={this.changehandler}
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
                        value={address}
                        onChange={this.changehandler}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="state">State</label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select
                          id="inputState"
                          className="form-control"
                          name="state"
                          value={state}
                          onChange={this.changehandler}
                        >
                          <option defaultValue="" value>
                            Select State
                          </option>
                          <option defaultValue="abuja">Abuja</option>
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
                        value={password}
                        onChange={this.changehandler}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        // value={confirmPassword}
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
