import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '11/01/App';
// import App from 'sandbox/11/App';

// week 1:
// 01 -leap years
// ---
// week 2:
// 02/01 -blog posts
// 02/02 -uuidv generator
// 02/03 -counter/timer
// ---
// week 3:
// 03/01_03 -colorPalette
// 03/04 -card
// 03/05 -menu
// 03/06 -employees
// ---
// week 4:
// 04/01 -form, tip converter
// 04/02 -form, validation
// 04/03 -react-hook-form
// 04/04 -form and 2 lists - wallet, json data, localStorage
// 04/05 -forwardRef button
// ---
// week 5:
// 05/01 -dialog window
// 05/02 -snackbar
// 05/03 -navMenu, router
// 05/04-05 -usersList, fetch, router, useEffect, map, filter
// ---
// week 7:
// 07/01-03 -userList with randomUser API, using UI-material, leaflet map, skeleton while fetching data
// ---
// week 8:
// 08/01 - unit tests with Jest
// 08/02 - testing counter with enzyme
// 08/03/01-03 - homework 07/01-03 with added tests  <<< unfinished
// 08/04 - E2E testing counter with cypress
// ---
// week 11:
// 11/01 - Redux, Router, Mock Service Worker, react-hook-form, material-UI, Notifier

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./11/01/mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
