import React, { Component } from 'react';


class EditPassword extends Component {
    state = {  }
    render() { 
        return (
          <React.Fragment>
            <div className="edit_password_page">
              <div className="main_inner_wrapper container">
                <div className="inner">
                  <div className="form_wrapper bg-white p-4 shadow">
                    <h5 className="text-center my-3">Edit Password</h5>
                    <hr className="my-2" />
                    <div class="alert alert-info" role="alert">
                      Your password has been updated
                    </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Old Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="login"
                          placeholder="Password"
                          name="login"
                        />
                        <small id="" className="form-text text_danger">
                          Error message else.
                        </small>
                      </div>
                      {/*  */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="login"
                          placeholder="Password"
                          name="login"
                        />
                      </div>
                      {/*  */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="login"
                          placeholder="Password"
                          name="login"
                        />
                        <small id="" className="form-text text_danger">
                          Password does not match
                        </small>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block bg_primary_dark _btn"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}
 
export default EditPassword;