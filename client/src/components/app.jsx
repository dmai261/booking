import React from 'react';
import Calendar from './calendar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const reactRouter = () => (
//   <Router>
//     <div>
//       <Router path="/public/:id" component={console.log(Booking)} />
//     </div>
//   </Router>
// )

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house_info: '',
    }
  }

  componentDidMount() {
    let url = window.location.href.match(/[0-9]+/g)[1]
    console.log('lol')
    fetch('/house/', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then((res) => {
        return res.text()
      }).then((data)=> {this.setState({house_info: JSON.parse(data)})});
  }

  // handleClick() {
    
  // }

  render() {
    return (
      <div>
        <div id='booking_container'>
        <div>${this.state.house_info.price_per_night} per night</div>
        <div>{this.state.house_info.reviews}</div>
        {console.log(this.props)}
        <div>Service Fee: {this.state.house_info.service_fee}</div>
        <div>Cleaning Fee: {this.state.house_info.cleaning_fee}</div>
        <button type='button' name='test' onClick={()=>this.handleClick()}>Test</button>
        </div>
      </div>
    )
  }
}

export default Booking;