import React from 'react';
const Home = React.lazy(() =>
    import ('./views/Home'));
const Login = React.lazy(() =>
    import ('./views/Login'));
const UserAccount = React.lazy(() =>
    import ('./views/UserAccount'));
const Register = React.lazy(() =>
    import ('./views/Register'));
const BmiTest = React.lazy(() =>
    import ('./views/BmiTest'));
const MedicalAppointment = React.lazy(() =>
    import ('./views/MedicalAppointment'));
const AppointmentList = React.lazy(() =>
    import ('./views/AppointmentList'));
const Testing = React.lazy(() =>
    import ('./views/Testing'));
const PageNotFound = React.lazy(() =>
    import ('./views/PageNotFound'));
const routes = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/user-account', component: UserAccount },
    { path: '/register', component: Register },
    { path: '/bmi', component: BmiTest },
    { path: '/medical-appointment', component: MedicalAppointment },
    { path: '/appointments', component: AppointmentList },
    { path: '/testing', component: Testing },
    { path: '/get-list', component: GetList },
    { path: '*', component: PageNotFound }
];

export default routes;