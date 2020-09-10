import React, { Component } from 'react';

class AppointmentList extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                <main className="mt-3 container">

                    <div className="card border-0 shadow my-4">
                        <div className="card-body">
                            <div className="text-center py-3">
                                <h5 className="text_capitalize">Your scheduled booking appointment</h5>
                            </div>

                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Health care center</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>23/05/2020</td>
                                        <td>13:00</td>
                                        <td>Gbagada General Hospital</td>
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
                </main>
            </React.Fragment>
         );
    }
}
 
export default AppointmentList;