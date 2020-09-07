<!-- header -->
<?php include_once '../components/header.php'; ?>

<div class="login_page custom_background_img">
    <div class="main_inner_wrapper container">
        <div class="inner">

            <div class="form_wrapper p-4 shadow">
                <h5 class="text-center my-3">Login</h5>
                <!-- form -->
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby=""
                            placeholder="Enter email">
                        <small id="" class="form-text text-danger">Error message
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        <small id="" class="form-text text-danger">Error message
                            else.</small>
                        <div class="float-right"><a href="#" class="regular_link">Forgot password?</a></div>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-block bg_primary_dark _btn">Login</button>
                    <small id="" class="form-text text-darl">
                        <span>Don't have an account?</span>&nbsp;<strong><a href="register.php" class="regular_link">Register</a></strong>
                    </small>
                </form>
            </div>
        </div>

    </div>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>