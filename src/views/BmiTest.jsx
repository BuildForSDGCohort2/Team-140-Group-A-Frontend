import React, {Component} from "react";


function calcBMI(){
  alert("hello");
}
class Bmi extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
                      <form id="BMIForm">
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="Height">Height (inches)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="Height"
                              name="Height"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="Weight">Weight (kg)</label>
                            <input
                              type="text"
                              className="form-control"
                              id="Weight"
                              name="Weight"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-6">
                            <label htmlFor="Age">Age</label>
                            <input
                              type="number"
                              className="form-control"
                              id="Age"
                              name="Age"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="Gender">Gender</label>
                            <div className="select_drop_wrapper fontawesome_pseudo">
                              <select id="Gender" className="form-control">
                                <option value="male" value>
                                  Male
                                </option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
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
