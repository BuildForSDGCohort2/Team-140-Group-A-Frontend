import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login: "",
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
    const {email, login} = this.state;
    return (
      <React.Fragment>
        <div className="login_page">
          <div className="main_inner_wrapper container">
            <div className="inner">
              <div className="form_wrapper p-4 shadow">
                <h5 className="text-center my-3">Login</h5>
                <hr className="my-2" />
                {/* <!-- form --> */}
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby=""
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={this.changehandler}
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
                      id="login"
                      placeholder="Password"
                      name="login"
                      value={login}
                      onChange={this.changehandler}
                    />
                    <small id="" className="form-text text_danger">
                      Error message else.
                    </small>
                    <div className="float-right my-2">
                      <Link to="/reset-password" className="regular_link">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  {/* <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                  </div> */}
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
