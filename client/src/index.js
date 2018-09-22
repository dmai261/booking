import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './components/booking.jsx';

// ReactDOM.render(
//   React.createElement(Booking, {homeId: window.location.pathname.match(/[0-9]+/g)[0]}, null)
// , document.getElementById('booking'));

window.Booking = Booking;