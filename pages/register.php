<!-- header -->
<?php include_once '../components/header.php'; ?>

<div class="register_page custom_background_img">
    <div class="main_inner_wrapper container">
        <div class="inner">

            <div class="form_wrapper p-4 shadow">
                <h5 class="text-center my-3">Register</h5>
                <!-- form -->
                <form>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control" id="firstname" name="firstname">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control" id="lastname" name="lastname">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-8 col-md-8">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" id="email" name="email">
                        </div>
                        <div class="form-group col-4 col-md-4">
                            <label for="gender">Gender</label>
                            <div class="select_drop_wrapper fontawesome_pseudo p-0">
                                <select id="inputGender" class="form-control">
                                    <option value="male" selected>Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-8">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" name="address">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="state">State</label>
                            <div class="select_drop_wrapper fontawesome_pseudo p-0">
                                <select id="inputState" class="form-control">
                                    <option value="abuja" selected>Abuja</option>
                                    <option value="lagos">Lagos</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                        <div class="form-group col-6">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword">
                            <small id="" class="form-text text-danger">Error message
                                else.</small>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-block bg_primary_dark _btn">Register</button>
                    <small id="" class="form-text text-darl">
                        <span>Already have an account?</span>&nbsp;<strong><a href="./login.php"
                                class="regular_link">Login</a></strong>
                    </small>
                </form>
            </div>
        </div>

    </div>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>