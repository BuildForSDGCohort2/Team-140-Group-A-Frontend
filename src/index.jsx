import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// import {library} from "@fortawesome/fontawesome-svg-core";
// import {faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter} from "react-router-dom"; 


// library.add(faCheckSquare, faCoffee);

ReactDOM.render( 
  <BrowserRouter>  
  <App />  
</BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();