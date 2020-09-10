import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Bmi from "./views/BmiTest";
import MedicalAppointment from "./views/MedicalAppointment";
import PageNotFound from "./views/PageNotFound";
import {Route} from "react-router-dom";
import UserAccount from "./views/UserAccount";
import {Switch} from "react-router-dom"; 
import AppointmentList from "./views/AppointmentList";
import UserEditProfile from "./views/UserEditProfile";
import ResetPassword from "./views/UserResetPassword";
import EditPassword from "./views/UserEditPassword";

// 
// 
import Testing from "./components/test-components/Testing";
import GetList from "./components/test-components/HttpGetRequest";
import PostRequest from "./components/test-components/HttpPostRequest";




class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="custom_background_img">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route
              exact
              path="/user-account/:slug"
              component={UserAccount}
            ></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/bmi" component={Bmi}></Route>
            <Route
              exact
              path="/appointments"
              component={AppointmentList}
            ></Route>
            <Route
              exact
              path="/user-edit-profile"
              component={UserEditProfile}
            ></Route>
            <Route
              exact
              path="/medical-appointment"
              component={MedicalAppointment}
            ></Route>
            <Route
              exact
              path="/reset-password"
              component={ResetPassword}
            ></Route>
            <Route
              exact
              path="/edit-password"
              component={EditPassword}
            ></Route>

            {/*  */}
            <Route exact path="/testing" component={Testing}></Route>
            <Route exact path="/get-list" component={GetList}></Route>
            <Route exact path="/post" component={PostRequest}></Route>
            {/* // */}
            <Route exact path="*" component={PageNotFound}></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
