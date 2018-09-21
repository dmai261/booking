import React from 'react';
import Calendar from './calendar.jsx';
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
  -webkit-font-smoothing: antialiased;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0px;
  margin-top: 24px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  user-select: none;

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
const Stars = styled.span`
  display: inline-block;
  color: #008489;
  font-size: 9px;
  height: 10px;
  margin-right: 1px;
  width: 9px;
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
  margin-bottom: 8px;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  font-weight: normal;
`

const FooterHeader = styled.div`
  font-weight: 600;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: rgb(72, 72, 72);
  display: inline;
  margin: 0px;
`

const Image = styled.div`
  background-image: url(https://a0.muscache.com/airbnb/static/page3/icon-uc-tag-e7b50003027fb27234690eb38ae9abdd.gif);
  background-size: 48px;
  margin-top: 0px;
  transition: margin-top 0.4s ease 0s;
  background-repeat: no-repeat;
  background-position: right center;
`

const FeesContainer = styled.div`
  display: table;
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  margin-top: 20px;
  margin-bottom: 24px;
  width:100%;
`
const FeeRows = styled.div`
  display: table;
  width: 100%;
`
const FeeStyling = styled.div`
  display: table-cell;
  width: 100%;
`
const FeeLine = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
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
      },
      fees: false,
    }
  }

  componentDidMount() {
    let url = this.props.homeId;
    fetch('/house/' + url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then((res) => {
        return res.text()
      }).then((data)=> {this.setState({house_info: JSON.parse(data)})});

    window.addEventListener('scroll', ()=>{
      this.togglePosition();
    });
  }

  // componentWillMount() {
  //   window.addEventListener('scroll', ()=>{
  //     this.togglePosition();
  //   });
  // }

  togglePosition() {
    let containerHeight = document.getElementById('container').clientHeight;
    let footerHeight = document.getElementById('footer').scrollHeight;
    let galleryHeight = document.getElementById('gallery').scrollHeight;

    if (window.pageYOffset >= galleryHeight + 80 && window.pageYOffset <= containerHeight - galleryHeight + 150) {
      this.setState({style: {
        "width": "376px", 
        "zIndex": "3", 
        "marginBottom":"8px",
        "position":"fixed",
        "top": 0
      }})
    } else if (window.pageYOffset < galleryHeight + 80) {
      this.setState({style: {
        "width": "376px", 
        "zIndex": "3", 
        "marginBottom":"8px",
        "position":"absolute",
      }})
    } 
    else {
      this.setState({style: {
        "width": "376px", 
        "zIndex": "3", 
        "marginBottom":"8px",
        "position":"absolute",
        "top": containerHeight - footerHeight - galleryHeight +100 + 'px'
      }})
    }
  }
  render() {
    return (
      <div style={this.state.style}>
        <Booking_container>
        <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
          <DollarPerNight>${this.state.house_info.price_per_night}</DollarPerNight>
          <PerNight> per night</PerNight>
        </div>
        <Reviews>
          <Stars>
            <svg viewBox="0 0 1000 1000" role="presentation" focusable="false" style={{"height": "1em", "width": "1em", "display": "inline-block", "fill": "currentcolor"}}>
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
              </path>
            </svg>
          </Stars>
          <Stars>
            <svg viewBox="0 0 1000 1000" role="presentation" focusable="false" style={{"height": "1em", "width": "1em", "display": "inline-block", "fill": "currentcolor"}}>
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
              </path>
            </svg>
          </Stars>
          <Stars>
            <svg viewBox="0 0 1000 1000" role="presentation" focusable="false" style={{"height": "1em", "width": "1em", "display": "inline-block", "fill": "currentcolor"}}>
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
              </path>
            </svg>
          </Stars>
          <Stars>
            <svg viewBox="0 0 1000 1000" role="presentation" focusable="false" style={{"height": "1em", "width": "1em", "display": "inline-block", "fill": "currentcolor"}}>
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
              </path>
            </svg>
          </Stars>
          <Stars>
            <svg viewBox="0 0 1000 1000" role="presentation" focusable="false" style={{"height": "1em", "width": "1em", "display": "inline-block", "fill": "currentcolor"}}>
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
              </path>
            </svg>
          </Stars>
          <span style={{"marginLeft":"4px"}}>
            {this.state.house_info.reviews}
          </span>
        </Reviews>

        <Line></Line>

        <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
          <Calendar stateSetter={this.setState.bind(this)}/>
          <Guest guests={this.state.guest_info} func={this.setState.bind(this)}/>
        </div>

        {this.state.fees &&
        <FeesContainer>
          <FeeRows>
            <FeeStyling>${this.state.house_info.price_per_night + ' x'} {this.state.days} nights</FeeStyling>
            <FeeStyling>${this.state.house_info.price_per_night * this.state.days}</FeeStyling>
          </FeeRows>

          <FeeLine></FeeLine>

          <FeeRows>
            <FeeStyling>Cleaning fee: </FeeStyling>
            <FeeStyling>${this.state.house_info.cleaning_fee}</FeeStyling>
          </FeeRows>

          <FeeLine></FeeLine>

          <FeeRows>
            <FeeStyling>Service fee: </FeeStyling>
            <FeeStyling>${this.state.house_info.service_fee}</FeeStyling>
          </FeeRows>
          <FeeLine></FeeLine>
          
          <FeeRows>
            <FeeStyling style={{"fontWeight":"bold"}}>Total: </FeeStyling>
            <FeeStyling style={{"fontWeight":"bold"}}>${this.state.house_info.price_per_night * this.state.days + this.state.house_info.service_fee + this.state.house_info.cleaning_fee} </FeeStyling>
          </FeeRows>
          

        </FeesContainer>}

        <Button type='button' className='bookbtn' onClick={()=>console.log('Booked!')}>Book</Button>

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