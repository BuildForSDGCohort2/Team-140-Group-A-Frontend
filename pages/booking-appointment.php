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
                                <h5 class="text_capitalize">Your scheduled booking appointment</h5>
                            </div>

                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Health care center</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>23/05/2020</td>
                                        <td>13:00</td>
                                        <td>Gbagada General Hospital</td>
                                        <td>Family Health</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>03/01/2019</td>
                                        <td>09:45</td>
                                        <td>Gbagada General Hospital</td>
                                        <td>Family Health</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

</div>

<!-- footer -->
<?php include_once '../components/footer.php'; ?>