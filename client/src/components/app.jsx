import React from 'react';
import Calendar from './calendar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Guest from './guest.jsx';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  -webkit-transition-property: background, border-color, color !important;
  -moz-transition-property: background, border-color, color !important;
  transition-property: background, border-color, color !important;
  -webkit-transition-duration: 0.2s !important;
  transition-duration: 0.2s !important;
  -webkit-transition-timing-function: ease-out !important;
  transition-timing-function: ease-out !important;
  border-radius: 4px !important;
  width: 100% !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  font-weight: 800 !important;
  border-width: 2px !important;
  border-style: solid !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  min-width: 77.66563145999496px !important;
  box-shadow: none !important;
  background: #FF5A5F !important;
  border-color: transparent !important;
  color: #ffffff !important;
`

const Booking_container = styled.div`
  padding-left: 24px !important;
   padding-right: 24px !important;
   margin: 0px !important;
   border: 1px solid #e4e4e4 !important;
   background-color: #ffffff !important;
`

const DollarPerNight = styled.span`
word-wrap: break-word !important;
font-size: 18px !important;
line-height: 26px !important;
letter-spacing: normal !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
color: rgb(72, 72, 72) !important;
font-weight: 800 !important;
display: inline !important;
margin: 0px !important;
`

const PerNight = styled.span`
font-weight: 600 !important;
   margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 12px !important;
   line-height: 16px !important;
   letter-spacing: normal !important;
   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
   text-transform: undefined !important;
   color: #484848 !important;
   padding-top: undefined !important;
   padding-bottom: undefined !important;
   display: inline !important;
`

const Reviews = styled.div`
font-weight: 600 !important;
   margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 12px !important;
   line-height: 16px !important;
   letter-spacing: normal !important;
   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
   text-transform: undefined !important;
   color: #484848 !important;
   padding-top: undefined !important;
   padding-bottom: undefined !important;
   display: inline !important;
`

const Line = styled.div`
margin-top: 16px;
margin-bottom: 16px;
border-bottom: 1px solid #EBEBEB;
`
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
        <Booking_container>
        <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
          <DollarPerNight>${this.state.house_info.price_per_night}</DollarPerNight>
          <PerNight> per night</PerNight>
        </div>
        <span>
        <img src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></img>
        </span>
        <Reviews>{this.state.house_info.reviews}</Reviews>
        <Line></Line>
        <div>
          <Calendar />
          <Guest guests={this.state.guest_info} func={this.setState.bind(this)}/>

        </div>
        <div>Service Fee: {this.state.house_info.service_fee}</div>
        <div>Cleaning Fee: {this.state.house_info.cleaning_fee}</div>
        <Button type='button' className='bookingbtn' onClick={()=>this.handleClick()}>Booking</Button>
        </Booking_container>
      </div>
    )
  }
}

export default Booking;