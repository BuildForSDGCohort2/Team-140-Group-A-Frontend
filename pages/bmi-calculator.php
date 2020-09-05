<!-- header -->
<?php include_once '../components/header.php'; ?>


<div class="bmi_calculator_page custom_background_img">

    <section class="page_banner">
        <div class="container py-5 text-white">
            <h1 class="text_capitalize">BMI TEST</h1>
        </div>
    </section>
    <section>
        <div class="container">
            <p class="display_3 py-3">The Body Mass Index (BMI) Calculator can be used to calculate BMI value and
                corresponding weight status while
                taking age into consideration.</p>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="shadow bg-white mb-4 py-4">
                        <div class="mb-3">
                            <h4 class="text-center text_capitalize">BMI calculator</h4>
                        </div>
                        <!-- mini navtabs -->
                        <ul class="nav nav-pills mb-3 bmi_calc_form_nav" id="pills-tab" role="tablist">
                            <li class="nav-item w-50">
                                <a class="nav-link active rounded-0" id="pills-adult-tab" data-toggle="pill"
                                    href="#pills-adult" role="tab" aria-controls="pills-adult"
                                    aria-selected="true">Adult</a>
                            </li>
                            <li class="nav-item w-50">
                                <a class="nav-link rounded-0" id="pills-child-tab" data-toggle="pill"
                                    href="#pills-child" role="tab" aria-controls="pills-child"
                                    aria-selected="false">Child</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-adult" role="tabpanel"
                                aria-labelledby="pills-adult-tab">
                                <!-- Adult form -->
                                <div class="container">

                                    <form>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="height">Height</label>
                                                <input type="text" class="form-control" id="height" name="height">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="weight">Weight</label>
                                                <input type="text" class="form-control" id="weight" name="weight">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-6">
                                                <label for="age">Age</label>
                                                <input type="number" class="form-control" id="age" name="age">
                                            </div>
                                            <div class="form-group col-6">
                                                <label for="gender">Gender</label>
                                                <div class="select_drop_wrapper fontawesome_pseudo">
                                                    <select id="inputGender" class="form-control">
                                                        <option value="male" selected>Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit"
                                            class="btn btn-block bg_primary_dark _btn">Calculate</button>
                                        <small id="emailHelp" class="form-text text-darl">
                                            <button type="button"
                                                class="btn btn-sm border-0 form-text text-danger">Reset</button>
                                        </small>
                                    </form>
                                </div>
                                <!--  -->
                            </div>
                            <div class="tab-pane fade" id="pills-child" role="tabpanel"
                                aria-labelledby="pills-child-tab">

                                <!-- Child form -->
                                <div class="container">

                                    <form>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="height">Height</label>
                                                <input type="text" class="form-control" id="height" name="height">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="weight">Weight</label>
                                                <input type="text" class="form-control" id="weight" name="weight">
                                            </div>
                                        </div>
                                        <!-- <div class="form-row">
                                            <div class="form-group col-6">
                                                <label for="age">Date of birth</label>
                                                <input type="number" class="form-control" id="age" name="age">
                                            </div>
                                            <div class="form-group col-6">
                                                <label for="gender">Gender</label>
                                                <select id="inputGender" class="form-control">
                                                    <option value="male" selected>Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div> -->
                                        <div class="form-row">
                                            <div class="form-group col-12">
                                                <label for="age">Date of birth</label>
                                                <div class="form-row">
                                                    <div class="form-group col-3">
                                                        <label for="day"><small>Day</small></label>
                                                        <input type="number" class="form-control" id="day" name="day">
                                                    </div>
                                                    <div class="form-group col-3">
                                                        <label for="month"><small>Month</small></label>
                                                        <input type="number" class="form-control" id="month"
                                                            name="month">
                                                    </div>
                                                    <div class="form-group col-6">
                                                        <label for="year"><small>Year</small></label>
                                                        <input type="number" class="form-control" id="year" name="year">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-6">
                                                <label for="gender">Gender</label>
                                                <div class="select_drop_wrapper fontawesome_pseudo">
                                                    <select id="inputGender" class="form-control">
                                                        <option value="male" selected>Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit"
                                            class="btn btn-block bg_primary_dark _btn">Calculate</button>
                                        <small id="emailHelp" class="form-text text-darl">
                                            <button type="button"
                                                class="btn btn-sm border-0 form-text text-danger">Reset</button>
                                        </small>
                                    </form>
                                </div>
                                <!--  -->
                            </div>
                        </div>
                        <!--  -->
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <section>
                        <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight,
                            and is intended to quantify tissue mass. It is widely used as a general indicator of whether
                            a person has a healthy body weight for their height. Specifically, the value obtained from
                            the calculation of BMI is used to categorize whether a person is underweight, normal weight,
                            overweight, or obese depending on what range the value falls between.
                            <br>
                            <br>
                            These ranges of BMI
                            vary based on factors such as region and age, and are sometimes further divided into
                            subcategories such as severely underweight or very severely obese. Being overweight or
                            underweight can have significant health effects, so while BMI is an imperfect measure of
                            healthy body weight, it is a useful indicator of whether any additional testing or action is
                            required. Refer to the table below to see the different categories based on BMI that is used
                            by the calculator.</p>
                    </section>
                </div>
            </div>
        </div>
    </section>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>