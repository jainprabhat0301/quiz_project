import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'mdbreact/dist/css/mdb.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// import "./assets/scss/mdb.scss"
//import 'antd/dist/antd.css';


//import { Spring } from 'react-spring';

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // ES5 with npm
//import 'bootstrap/dist/js/bootstrap.bundle.js';
//import './bootstrap/dist/js/bootstrap.bundle.mun.js'
//C:\Users\hp\Desktop\my-app\node_modules\bootstrap\dist\css

import * as serviceWorker from './serviceWorker';
// import {Home} from './components/home';
// import {AddQuiz} from './components/addquiz';
// //import Admin, { Quiz } from './components/quiz';
// //import App from './App';
// import { Exam } from './components/exam';
// import { Score } from './components/score';
import App from './App';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";

 ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
