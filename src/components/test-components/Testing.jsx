import React, {Component} from "react";
import "../../App.css";

class Testing extends Component {
  state = {
    user: [
      {
        id: "1",
        date: "23/04/2020",
        time: "15:00",
        hc: "Gbagada General Hospital",
        dept: 	"Family Health",
      },
      {
        id: "2",
        date: "23/04/2020",
        time: "15:00",
        hc: "Gbagada General Hospital",
        dept: 	"Family Health",
      },
      {
        id: "3",
        date: "23/04/2020",
        time: "15:00",
        hc: "Gbagada General Hospital",
        dept: 	"Family Health",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="card border-0 shadow my-4 sized_container">
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
                  {this.state.user.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.date}</td>
                        <td>{user.time}</td>
                        <td>{user.hc}</td>
                        <td>{user.dept}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Testing;