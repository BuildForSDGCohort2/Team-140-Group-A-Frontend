import React, {Component} from "react";
import {Link} from "react-router-dom";

class ResetPassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="reset_password_page">
          <div className="main_inner_wrapper container">
            <div className="inner">
              <div className="form_wrapper bg-white p-4 shadow">
                <h5 className="text-center my-3">Reset Password</h5>
<hr className="my-2"/>
                <div class="alert alert-info" role="alert">
                  A confirmation link has been sent to your mail
                </div>

                <form>
                  <p className="text-center">
                    Please enter the email address you registered with. We will
                    send you a link
                  </p>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby=""
                      placeholder="Enter email"
                      name="email"
                    />
                    <small id="" className="form-text text_danger">
                      Invalid email address!
                    </small>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block bg_primary_dark _btn"
                  >
                    Send Link
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

export default ResetPassword;
