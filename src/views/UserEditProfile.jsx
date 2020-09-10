import React, { Component } from 'react';


class UserEditProfile extends Component {
    state = {  }
    render() { 
        return (
          <React.Fragment>
            <main className="mt-5 sized_container">
              <div className="card border-0 shadow my-4">
                <div className="card-body">
                  {/* <!-- form --> */}
                  <form action="#">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="lastname">Last Name</label>
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
                        <label for="email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="form-group col-4 col-md-4">
                        <label for="gender">Gender</label>
                        <div className="select_drop_wrapper fontawesome_pseudo p-0">
                          <select id="inputGender" className="form-control">
                            <option value="male" selected>
                              Male
                            </option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label for="phone">Phone Number</label>
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
                        <label for="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label for="state">State</label>
                        <div className="select_drop_wrapper fontawesome_pseudo p-0">
                          <select id="inputState" className="form-control">
                            <option value="abuja" selected>
                              Abuja
                            </option>
                            <option value="lagos">Lagos</option>
                          </select>
                        </div>
                      </div>
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
            </main>
          </React.Fragment>
        );
    }
}
 
export default UserEditProfile;