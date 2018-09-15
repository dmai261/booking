import React from 'react';
import Calendar from './calendar.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Guest from './guest.jsx';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition-property: background, border-color, color;
  -moz-transition-property: background, border-color, color;
  transition-property: background, border-color, color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-transform: undefined;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 800;
  border-width: 2px;
  border-style: solid;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 77.66563145999496px;
  box-shadow: none;
  background: #FF5A5F;
  border-color: transparent;
  color: #ffffff;
`

const Booking_container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin: 0px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
`

const DollarPerNight = styled.span`
  word-wrap: break-word;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: normal;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: rgb(72, 72, 72);
  font-weight: 800;
  display: inline;
  margin: 0px;
`

const PerNight = styled.span`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-transform: undefined;
  color: #484848;
  padding-top: undefined;
  padding-bottom: undefined;
  display: inline;
`

const Reviews = styled.div`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-transform: undefined;
  color: #484848;
  padding-top: undefined;
  padding-bottom: undefined;
  display: inline;
`

const Line = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #EBEBEB;
`

const NoCharge = styled.div`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  text-align: center;
`

const FooterMessage = styled.div`
  margin-top: 6px;
  margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 14px !important;
   line-height: 18px !important;
   letter-spacing: normal !important;
   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
   text-transform: undefined !important;
   color: #484848 !important;
   padding-top: undefined !important;
   padding-bottom: undefined !important;
   font-weight: normal !important;
`

const FooterHeader = styled.div`
font-weight: 600 !important;
   word-wrap: break-word !important;
   font-size: 14px !important;
   line-height: 18px !important;
   letter-spacing: normal !important;
   font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
   color: rgb(72, 72, 72) !important;
   display: inline !important;
   margin: 0px !important;
`

const Image = styled.div`
background-image: url(https://a0.muscache.com/airbnb/static/page3/icon-uc-tag-e7b50003027fb27234690eb38ae9abdd.gif);
background-size: 48px !important;
margin-top: 0px !important;
transition: margin-top 0.4s ease 0s !important;
background-repeat: no-repeat !important;
background-position: right center !important;
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
      },
      fees: false,
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
      <div style={{"marginLeft":"45px","width": "376px", "zIndex": "3", "position":"absolute","top":"32px"}}>
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

        <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
          <Calendar stateSetter={this.setState.bind(this)}/>
          <Guest guests={this.state.guest_info} func={this.setState.bind(this)}/>
        </div>

        {this.state.fees &&
        <div>
          <div>Service fee: {this.state.house_info.service_fee}</div>
          <div>Cleaning Fee: {this.state.house_info.cleaning_fee}</div>
          <div>Total </div>
        </div>}

        <Button type='button' className='bookbtn' onClick={()=>this.handleClick()}>Book</Button>

        <div style={{"marginTop":"16px", "marginBottom":"8px","verticalAlign":"middle"}}>
          <NoCharge>You won't be charged yet</NoCharge>
        </div>
        
        <Line></Line>

        <FooterMessage>
          <Image>
            <div style={{"minHeight":"34px", "width": "84%"}}>
              <FooterHeader>
                New lower price
              </FooterHeader>
              <div>
                Price for your trip was just lowered by $2,000,000.
              </div>
            </div>
          </Image>
        </FooterMessage>
        
        </Booking_container>
      </div>
    )
  }
}

export default Booking;