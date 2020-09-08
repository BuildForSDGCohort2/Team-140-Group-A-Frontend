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
                            <div class="text-center py-3">
                                <h5 class="text_capitalize"> schedule an appointment</h5>
                            </div>

                            <form action="#">

                                <div class="form-row">
                                    <div class="form-group col-12 col-md-6">
                                        <label for="name">Name</label>
                                        <div class="p-0">
                                            <input type="text" class="form-control" name="name" id="name"
                                                value="Alli Abayomi" readonly>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 col-md-6">
                                        <label for="age">Age</label>
                                        <div class="p-0">
                                            <input type="number" class="form-control" name="age" id="age"
                                                value="Alli Abayomi">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-12 col-md-6">
                                        <label for="lagoshospital">Select Health care center</label>
                                        <div class="select_drop_wrapper fontawesome_pseudo p-0">
                                            <select id="lagoshospital" class="form-control">
                                                <option value="alimosho">Alimosho General Hospital</option>
                                                <option value="lasu">Lagos State University Teaching Hospital</option>
                                                <option value="gbadada">Gbagada General Hospital</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 col-md-6">
                                        <label for="department">Select Health Department</label>
                                        <div class="select_drop_wrapper fontawesome_pseudo p-0">
                                            <select id="department" class="form-control">
                                                <option value="publicHealth">Public Health</option>
                                                <option value="familyHealth">Family Health</option>
                                                <option value="hospitalServices">Hospital Services</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-12 col-md-6">
                                        <label for="date">Pick Date</label>
                                        <div class="select_drop_wrapper fontawesome_pseudo p-0">
                                            <input type="date" class="form-control" name="date" id="date">
                                        </div>
                                    </div>
                                    <div class="form-group col-12 col-md-6">
                                        <label for="time">Pick Time</label>
                                        <ul class="remove_style d_flex flex_just_spaceBetween flex_align_center">
                                            <li>
                                                <input type="radio" name="time" id="time1" class="hidden_radio">
                                                <label for="time1">
                                                    <span class="pseudo_radio"></span>
                                                    9:00am
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" name="time" id="time2" class="hidden_radio">
                                                <label for="time2">
                                                    <span class="pseudo_radio"></span>
                                                    12:00noon
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" name="time" id="time3" class="hidden_radio">
                                                <label for="time3">
                                                    <span class="pseudo_radio"></span>
                                                    03:00pm
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col">
                                        <label for="date">Reason For Visit</label>
                                        <div class="p-0">
                                            <textarea name="reason_for_visit" id="reason_for_visit"
                                                class="w-100 form-control" cols="30" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-block bg_primary_dark _btn">Book
                                    Appointment</button>
                                <small id="" class="form-text text-darl">
                                </small>

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