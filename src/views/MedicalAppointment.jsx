import React, { Component } from "react";
import axios from "axios";


class MedicalAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alli Abayomi",
      age: "",
      healthCenter: "",
      department: "",
      date: "",
      time: "",
      reasonForVisit: "",
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
      name,
      age,
      healthCenter,
      department,
      date,
      time,
      reasonForVisit,
    } = this.state;
    return (
      <React.Fragment>
        <div className="p-4 text-center alert alert-info" role="alert">
          <h5>
            Note: We book appointments with doctors only for Tuesdays,
            Wednesdays and Thursdays
          </h5>
        </div>
        <div className="px-3">
          <div className="mt-3 sized_container">
            <div className="card border-0 shadow my-4">
              <div className="card-body">
                <div className="text-center py-3">
                  <h5 className="text_capitalize"> schedule an appointment</h5>
                  <hr className="my-2" />
                </div>

                <form onSubmit={this.submitHandler}>
                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="name">Name</label>
                      <div className="p-0">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          readOnly
                          value={name}
                          onChange={this.changehandler}
                        />
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="age">Age</label>
                      <div className="p-0">
                        <input
                          type="number"
                          className="form-control"
                          name="age"
                          id="age"
                          value={age}
                          onChange={this.changehandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="lagoshospital">
                        Select Health Care Center
                      </label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select
                          id="lagoshospital"
                          className="form-control"
                          name="healthCenter"
                          value={healthCenter}
                          onChange={this.changehandler}
                        >
                          <option value="" value>
                            Health care center
                          </option>
                          <option value="alimosho">
                            Alimosho General Hospital
                          </option>
                          <option value="lasu">
                            Lagos State University Teaching Hospital
                          </option>
                          <option value="gbadada">
                            Gbagada General Hospital
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="department">
                        Select Health Department
                      </label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <select
                          id="department"
                          className="form-control"
                          name="department"
                          value={department}
                          onChange={this.changehandler}
                        >
                          <option value="" value>
                            Department
                          </option>
                          <option value="publicHealth">Public Health</option>
                          <option value="familyHealth">Family Health</option>
                          <option value="hospitalServices">
                            Hospital Services
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="date">Pick Date</label>
                      <div className="select_drop_wrapper fontawesome_pseudo p-0">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          value={date}
                          onChange={this.changehandler}
                        />
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label htmlFor="time">Pick Time</label>
                      <ul className="remove_style d_flex flex_just_spaceBetween flex_align_center">
                        <li>
                          <input
                            type="radio"
                            name="time"
                            id="time1"
                            className="hidden_radio"
                            value={time}
                            onChange={this.changehandler}
                          />
                          <label htmlFor="time1">
                            <span className="pseudo_radio"></span>
                            9:00am
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="time"
                            id="time2"
                            className="hidden_radio"
                            value={time}
                            onChange={this.changehandler}
                          />
                          <label htmlFor="time2">
                            <span className="pseudo_radio"></span>
                            12:00noon
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="time"
                            id="time3"
                            className="hidden_radio"
                            value={time}
                            onChange={this.changehandler}
                          />
                          <label htmlFor="time3">
                            <span className="pseudo_radio"></span>
                            03:00pm
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="date">Reason For Visit</label>
                      <div className="p-0">
                        <textarea
                          name="reasonForVisit"
                          id="reason_for_visit"
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          value={reasonForVisit}
                          onChange={this.changehandler}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block bg_primary_dark _btn"
                  >
                    Book Appointment
                  </button>
                  <small id="" className="form-text text-darl"></small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MedicalAppointment;
