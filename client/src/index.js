import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './components/app.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
<Router>
  <Route path="/public/:id" component={Booking}/>
</Router>
, document.getElementById('booking'));
