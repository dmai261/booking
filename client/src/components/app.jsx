import React from 'react';
import Calendar from './calendar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Guest from './guest.jsx'
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
      guest_info: {
        Adult: 1,
        Children: 0,
        Infants: 0,
      }
    }
  }

  componentDidMount() {
    let url = window.location.href.match(/[0-9]+/g)[1]
    fetch('/house/' + url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then((res) => {
        return res.text()
      }).then((data)=> {this.setState({house_info: JSON.parse(data)})});
  }

  handleClick() {
    
  }

  render() {
    return (
      <div>
        <div id='booking_container'>
        <div>${this.state.house_info.price_per_night} per night</div>
        <div>{this.state.house_info.reviews}</div>
        {/* <Calendar /> */}
        <Guest guests={this.state.guest_info} func={this.setState.bind(this)}/>
        <div>Service Fee: {this.state.house_info.service_fee}</div>
        <div>Cleaning Fee: {this.state.house_info.cleaning_fee}</div>
        <button type='button' name='test' onClick={()=>this.handleClick()}>Test</button>
        </div>
      </div>
    )
  }
}

export default Booking;