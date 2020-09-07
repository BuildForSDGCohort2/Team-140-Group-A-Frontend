<!-- header -->
<?php include_once '../components/header.php'; ?>
<div class="user_account_page custom_background_img">
    <div class="main_inner_wrapper container">
        <div class="row">
            <div class="col-md-3 page_sidenav hide" id="page_sidenav">
                
                <button class="border-0 focus_outline_none sidenav_toggler" type="button" id="sidenav_toggler"
                    onclick="closeSidenav()">
                    <i class="fas fa-plus rotate_45"></i>
                </button>
                <nav class="rounded mt-3">
                    <div class="inner">
                        <div class="px-1 py-3 text-center sidenav_header bg-dark text-white">
                            <h5>My Account</h5>
                        </div>
                        <div class="mb-1">
                            <ul class="nav_tab">
                                <li>
                                    <a href="./user-account.php">Profile</a>
                                </li>
                                <li class="active">
                                    <a href="./booking-appointment.php">Booking Appointments</a>
                                </li>
                                <li>
                                    <a href="./schedule-appointment.php">Schedule Appointment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-md-9">
                <button class="border-0 focus_outline_none sidenav_toggler" type="button" id="sidenav_toggler"
                    onclick="openSidenav()">
                    <i class="fas fa-bars"></i>
                </button>
                <main class="mt-3">

                    <div class="card border-0 shadow my-4">
                        <div class="card-body">
                            <!-- form -->
                            <form action="#">

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
                                    <div class="form-group col-12">
                                        <label for="phone">Phone Number</label>
                                        <input type="text" class="form-control" id="phone" name="phone">
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
                                <button type="submit" class="btn btn-block bg_primary_dark _btn">Register</button>

                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>