import React, {Component} from "react";
import "../App.css";
import {Link} from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="login_page">
          <div className="main_inner_wrapper container">
            <div className="inner">
              <div className="form_wrapper p-4 shadow">
                <h5 className="text-center my-3">Login</h5>
                {/* <!-- form --> */}
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby=""
                      placeholder="Enter email"
                    />
                    <small id="" className="form-text text_danger">
                      Error message else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    <small id="" className="form-text text_danger">
                      Error message else.
                    </small>
                    <div className="float-right">
                      <a href="#" className="regular_link">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block bg_primary_dark _btn"
                  >
                    Login
                  </button>
                  <small id="" className="form-text text-dark">
                    <span>Don't have an account?</span>&nbsp;
                    <strong>
                      <Link className="regular_link" to="/register">
                        Register
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

export default Login;
