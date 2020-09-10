import React, {Component} from "react";
import {Link} from "react-router-dom";

class UserAccount extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3 className="my-4">My Account</h3>
          <main className="mt-3">
            <div className="card border-0 shadow m-0">
              <div className="card-body">
                <h5>Alli Abayomi</h5>
                <div>
                  <strong>Email Address:</strong>&nbsp;
                  <span>alli_2020@gmail.com</span>
                </div>
                <div>
                  <strong>Phone Number:</strong>&nbsp;
                  <span>+234 802 6387 322</span>
                </div>
                <div>
                  <strong>Gender:</strong>&nbsp;<span>Male</span>
                </div>
                <div>
                  <strong>Address:</strong>&nbsp;<span>Lagos, Nigeria</span>
                </div>
                <div>
                  <Link
                    to="/user-edit-profile"
                    className="text_danger nav-link p-0"
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <Link
                    to="/user-change-phone"
                    className="text_danger nav-link p-0"
                  >
                    Change Phone Number
                  </Link>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow my-4">
              <div className="card-body">
                <div className="text-center py-3">
                  <h5 className="text_capitalize">
                    Your appointment booking history
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Health Care Center</th>
                        <th scope="col">Visited Department</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>23/05/2020</td>
                        <td>13:00</td>
                        <td>Lagos State University Teaching Hospital</td>
                        <td>Family Health</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>03/01/2019</td>
                        <td>09:45</td>
                        <td>Gbagada General Hospital</td>
                        <td>Family Health</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default UserAccount;
