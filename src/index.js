import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import SignUpPage from './pages/UserSignUpPage';
import Login from './pages/Login'
import * as serviceWorker from './serviceWorker';
import apiProgres from './shared/ApiProgres'
import ApiProgres from './shared/ApiProgres';
import {Provider} from 'react-redux';

import configureStore from './redux/configureStore';


const store=configureStore();

ReactDOM.render(
  <Provider store ={store}>
    <App/></Provider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
