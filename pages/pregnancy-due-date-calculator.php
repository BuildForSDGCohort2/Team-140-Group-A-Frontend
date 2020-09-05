<!-- header -->
<?php include_once '../components/header.php'; ?>


<div class="bmi_calculator_page custom_background_img">

    <section class="page_banner">
        <div class="container py-5 text-white">
            <h1>PREGNANCY DUE DATE TEST</h1>
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
                        <div class="mb-3 border-bottom">
                            <h4 class="text-center text_capitalize">pregnancy due date Calculator</h4>
                        </div>
                        <!-- form -->

                                <!-- Adult form -->
                                <div class="container">

                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-12">
                                                <label for="calc_method">Choose a calculation method</label>
                                                <div class="select_drop_wrapper fontawesome_pseudo">
                                                    <select id="calc_method" name="calc_method" class="form-control">
                                                        <option value="lastPeriod" selected>Last Period</option>
                                                        <option value="conceptionDate">Conception date</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-12">
                                                <input type="text" class="w-100 border-0 form-control" value="When did your last period start?" readonly id="dateLabel">
                                                <!-- if the value of 'calc_method' is 'Conception date', "dateLabel" will be equal to "When did you conceive?"  -->
                                                <input type="date" class="form-control" id="date" name="date">
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
                        <!--  -->
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <section class="mb-2">
                        <img src="../assets/images/pregnant-woman-image.png" alt="" class="img-fluid">
                    </section>
                </div>
            </div>
        </div>
    </section>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>