import React, { Component } from "react";
import {Button, Modal} from "react-bootstrap";

class Bmi extends Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      age: "",
      gender: "",
      // toggle modal popup
      show: false,
      // show bmi result
      result: "",
      formFillError: false,
    };
  }
  // 
  handleModal = () => {
    this.setState({show: !this.state.show});
  };
  // 
  changehandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    let h = parseInt(this.state.height);
    let w = parseInt(this.state.weight);
    h *= h;
    if (this.state.height && this.state.weight) {
      var result = (w / h).toFixed(2);
      console.log(`BMI result = ${result}`);
      // this.state.result = result;
      this.setState({result: (this.state.result = result)});
      this.setState({show: !this.state.show});
    } else {
      return
    }
  };

  // formFillHandler=() =>{
  //   this.setState({formFillError: !this.state.formFillError})
  // }
  
  render() {
    const { height, weight, age, gender } = this.state;
    return (
      <React.Fragment>
        <h4>My result</h4>
        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleModal();
          }}
        >
          <Modal.Header closeButton>BMI Calculation</Modal.Header>
          <Modal.Body>Your BMI calculation is: {this.state.result}</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Button
        </Button>
        <div className="bmi_calculator_page custom_background_img">
          <section className="page_banner">
            <div className="container py-5 text-white">
              <h1 className="text_capitalize">BMI TEST</h1>
            </div>
          </section>
          <section>
            <div className="container">
              <p className="display_3 py-3">
                The Body Mass Index (BMI) Calculator can be used to calculate
                BMI value and corresponding weight status while taking age into
                consideration.
              </p>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="shadow bg-white mb-4 py-4">
                    <div className="mb-3">
                      <h4 className="text-center text_capitalize">
                        BMI calculator
                      </h4>
                    </div>
                    <div className="container">
                      <form id="BMIForm" onSubmit={this.submitHandler}>
                        <div className="alert alert-danger" role="alert">
                          Please fill the form!
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="height">Height (inches)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="height"
                              name="height"
                              value={height}
                              onChange={this.changehandler}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="weight">Weight (kg)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="weight"
                              name="weight"
                              value={weight}
                              onChange={this.changehandler}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-6">
                            <label htmlFor="age">Age</label>
                            <input
                              type="number"
                              className="form-control"
                              id="age"
                              name="age"
                              value={age}
                              onChange={this.changehandler}
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="gender">Gender</label>
                            <div className="select_drop_wrapper fontawesome_pseudo">
                              <select
                                id="gender"
                                className="form-control"
                                name="gender"
                                value={gender}
                                onChange={this.changehandler}
                              >
                                <option value="" defaultValue>
                                  Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-block bg_primary_dark _btn"
                          id="BMIFormBtn"
                        >
                          Calculate
                        </button>
                        <small id="" className="form-text text-darl">
                          <button
                            type="button"
                            className="btn btn-sm border-0 form-text text-danger"
                          >
                            Reset
                          </button>
                        </small>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <section>
                    <p>
                      BMI is a measurement of a person's leanness or corpulence
                      based on their height and weight, and is intended to
                      quantify tissue mass. It is widely used as a general
                      indicator of whether a person has a healthy body weight
                      for their height. Specifically, the value obtained from
                      the calculation of BMI is used to categorize whether a
                      person is underweight, normal weight, overweight, or obese
                      depending on what range the value falls between.
                      <br />
                      <br />
                      These ranges of BMI vary based on factors such as region
                      and age, and are sometimes further divided into
                      subcategories such as severely underweight or very
                      severely obese. Being overweight or underweight can have
                      significant health effects, so while BMI is an imperfect
                      measure of healthy body weight, it is a useful indicator
                      of whether any additional testing or action is required.
                      Refer to the table below to see the different categories
                      based on BMI that is used by the calculator.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Bmi;
