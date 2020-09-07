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

                            <form id="pregnancyTestform">
                                <div class="form-row">
                                    <div class="form-group col-12">
                                        <label for="calc_method">Choose a calculation method</label>
                                        <div class="select_drop_wrapper fontawesome_pseudo">
                                            <select id="calculationMethod" name="calc_method" class="form-control"
                                                onchange="populateQuestion()">
                                                <option value="When did you have your last period start?" selected>Last
                                                    Period</option>
                                                <option value="When did you conceive?">Conception date</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-12">
                                        <input type="text" class="w-100 border-0 form-control"
                                            value="When did you have your last period start?" readonly
                                            id="pregnancyFormDateLabel">
                                        <!-- if the value of 'calc_method' is 'Conception date', "dateLabel" will be equal to "When did you conceive?"  -->
                                        <input type="date" class="form-control" id="pregnancyFormDate" name="date">
                                    </div>
                                </div>
                                <button type="button" class="btn btn-block bg_primary_dark _btn" onclick="calcPregnancyDueDate()">Calculate</button>
                                <small id="" class="form-text text-darl">
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

<!-- BMI result modal popup -->
<!-- Modal -->
<div class="modal fade pregnancy_test_modal_popup" id="pregnancyDueDateResultPopup" tabindex="-1" role="dialog"
    aria-labelledby="pregnancyDueDateResultPopupTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="text-center">
                    <h5 class="modal-title" id="pregnancyDueDateResultPopupTitle">Result</h5>
                </div>
                <button type="button" class="btn close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- <div class="d-none" id="bmi_adult_result_wrapper">
                    <ul>
                        <li>Age: <span id="resultAge"></span></li>
                        <li>Gender: <span class="text_capitalize" id="resultGender"></span></li>
                        <li>BMI Result: <span id="resultBMICalc"></span></li>
                    </ul>
                </div> -->
                <div class="" id="pregnancy_test_result_wrapper">                   
                        
                </div>
            </div>
        </div>
    </div>
</div>
<!--  -->

<!-- footer -->
<?php include_once '../components/footer.php'; ?>