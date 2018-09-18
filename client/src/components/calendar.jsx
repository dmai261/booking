import React from 'react';
import Month from './month.jsx'
import styled from 'styled-components'
import moment from 'moment'

const LabelForDates = styled.div`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  text-transform: undefined;
  color: #484848;
`
const StyledWordCheckIn = styled.div`
  font-weight: normal;
  font-size: 17px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 22px;
  color: #757575;
  margin: 0px;
  padding: 8px;
  background: #fff;
  position: relative;
  display: inline-block;
  width: -webkit-calc(50% - 12px);
  width: -moz-calc(50% - 12px);
  width: calc(50% - 12px);
  vertical-align: middle;
  
  &: hover {
    background: rgb(228,231,231)
  }
`
const StyledWordCheckOut = styled.span`
  font-weight: normal;
  font-size: 17px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 22px;
  color: #757575;
  margin: 0px;
  padding: 8px;
  background: #fff;
  position: relative;
  width: -webkit-calc(50% - 12px);
  width: -moz-calc(50% - 12px);
  width: calc(50% - 12px);
  vertical-align: middle;

  &: hover {
    background: rgb(228,231,231)
  }
`
const StyledArrow = styled.div`
  color: #757575;
  display:inline-block;
  vertical-align: middle;
`
const StyledWordContainer = styled.div`
  display: block;
  position: relative;
`
const CheckInOutContainer = styled.div`
  background-color: #fff;
  display: block;
  border: 1px solid #EBEBEB;
  border-radius: 2px;
  width: 100%;
`
const CalendarContainer = styled.div`
  position: absolute;
  width: 333px;
  margin-top: 10px;
  left: 22px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  z-index: 1;
  transition: height 0.2s ease-in-out 0s !important;
`
const LeftArrowContainer = styled.span`
  background-color: rgb(255, 255, 255);
  color: rgb(117, 117, 117);
  position: absolute;
  top: 18px;
  line-height: 0.78;
  left: 22px;
  margin: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  padding: 6px 9px;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  }
`
const Arrow = styled.div`
  height: 19px;
  width: 19px;
  fill: rgb(130, 136, 138);
  display: block;
`
const RightArrowContainer = styled.span`
  background-color: rgb(255, 255, 255);
  color: rgb(117, 117, 117);
  position: absolute;
  top: 18px;
  line-height: 0.78;
  right: 22px;
  margin: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  padding: 6px 9px;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  }
`
const CalendarHeader = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: rgb(72, 72, 72);
  font-size: 18px;
  text-align: center;
  padding-top: 22px;
  padding-bottom: 37px;
  caption-side: initial;
`
const MonthHeader = styled.span`
  font-weight: bold;
`

const WeekdayContainerContainer = styled.div`
  color: rgb(117, 117, 117);
  position: absolute;
  top: 62px;
  z-index: 2;
  text-align: left;
  left: 0px;
  padding: 0px 21px;
  user-select: none;
`
const WeekdayContainer = styled.ul`
  padding-left: 0px;
  padding-right: 0px;
  font-size: 14px;
  list-style: none;
  margin: 1px 0px;
`
const Weekdays = styled.li`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 0.85em;
  width: 41px;
  display: inline-block;
  text-align: center;
`
const MonthContainer = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px;
  max-width: 288px;
  margin-top: 4px;
  margin-left: 22px;
  margin-bottom: 12px;
`

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthSelected: moment(),
      startDateCalendarPicker: false,
      endDateCalendarPicker: false,
      dateChosen: [],
    }
  }

  componentDidMount() {
    let date = moment([2018,0,1]);
    let dates = [];

    for (var i = 0; i < 365; i++) {
      let dateObj = {};
      let currMonth = date.get('month');
      let value = date.format('dddd,MMMM,D,YYYY');
      dateObj[currMonth] = value;
      dates.push(dateObj);
      date.add(1, 'days');
    }

    this.setState({'dates': dates})
  }

  getMonthDates(month) {
    let dates = this.state.dates;
    let datesInCurrentMonth = []
    for (var i = 0; i < dates.length; i++) {
      if (Object.getOwnPropertyNames(dates[i])[0] === String(month)) {
        datesInCurrentMonth.push(dates[i]);
      }
    }
    return datesInCurrentMonth;
  }

  startDatePicker(date) {
    this.setState((prevState)=>{
      return {startDate: date, startDateCalendarPicker: false, endDateCalendarPicker: true}
    });
  }

  endDatePicker(date) {
    this.setState({endDate: date, endDateCalendarPicker: false},(prevState)=>{
      if (this.state.startDate && this.state.endDate) {
        let days = Math.abs((new Date(this.state.endDate) - new Date(this.state.startDate)) / (1000*60*60*24));
        this.props.stateSetter({fees: true, days: days});
      }
    });
  }

  render() {
    return (
      <div>
        <div style={{'marginTop':'16px', 'marginBottom':'8px'}}>
          <LabelForDates>
            Dates
          </LabelForDates>
        </div>
        <CheckInOutContainer>
          <div style={{'fontWeight':'600'}}>
          <StyledWordContainer>

              <StyledWordCheckIn onClick={()=>this.setState({'endDateCalendarPicker': false, 'startDateCalendarPicker': !this.state.startDateCalendarPicker})}>
                <div style={{'whiteSpace': 'no-wrap', 'overflow':'hidden'}}>
                  Check in
                </div>
              </StyledWordCheckIn>

              <StyledArrow>
                <svg viewBox='0 0 24 24' role='presentation' focusable='false' style={{'height': '24px', 'width': '24px', 'display': 'block', 'fill': 'currentcolor'}}>
                  <path d='m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z'>
                  </path>
                </svg>
              </StyledArrow>

              <StyledWordCheckOut onClick={()=>this.setState({'endDateCalendarPicker': !this.state.endDateCalendarPicker, 'startDateCalendarPicker': false})}>
                Check out
              </StyledWordCheckOut>

          </StyledWordContainer>
          </div>
        </CheckInOutContainer>

        {this.state.startDateCalendarPicker &&
        <div>
           <CalendarContainer>
             <CalendarHeader>
              <LeftArrowContainer onClick={()=>this.setState({monthSelected: this.state.monthSelected.subtract(1,'month')})}>
                <Arrow>
                  <svg focusable='false' viewBox='0 0 1000 1000'>
                    <path d='M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'>
                    </path>
                  </svg>
                </Arrow>
              </LeftArrowContainer>

              <MonthHeader>
                {this.state.monthSelected.format('MMMM')}
              </MonthHeader>

              <RightArrowContainer onClick={()=>this.setState((prevState, props)=>({monthSelected: prevState.monthSelected.add(1,'month')}))}>
                <Arrow>
                  <svg focusable='false' viewBox='0 0 1000 1000'>
                    <path d='M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z'>
                    </path>
                  </svg>
                </Arrow>
              </RightArrowContainer>
              
              <WeekdayContainerContainer>
                <WeekdayContainer>
                  <Weekdays>
                    Su
                  </Weekdays>
                  <Weekdays>
                    Mo
                  </Weekdays>
                  <Weekdays>
                    Tu
                  </Weekdays>
                  <Weekdays>
                    We
                  </Weekdays>
                  <Weekdays>
                    Th
                  </Weekdays>
                  <Weekdays>
                    Fr
                  </Weekdays>
                  <Weekdays>
                    Sa
                  </Weekdays>
                </WeekdayContainer>
              </WeekdayContainerContainer>
             </CalendarHeader>
            <MonthContainer>
              <Month datePicker={this.startDatePicker.bind(this)} monthNumber={this.state.monthSelected.get('month')} months={this.getMonthDates.bind(this)} />
            </MonthContainer>
          </CalendarContainer>
          </div>}

          {this.state.endDateCalendarPicker &&
          <div>
           <CalendarContainer>
             <CalendarHeader>
              <LeftArrowContainer onClick={()=>this.setState({monthSelected: this.state.monthSelected.subtract(1,'month')}, (prevState, props)=>(console.log('wtfman',this.state.monthSelected.get('month'))))}>
                <Arrow>
                  <svg focusable='false' viewBox='0 0 1000 1000'>
                    <path d='M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'>
                    </path>
                  </svg>
                </Arrow>
              </LeftArrowContainer>

              <MonthHeader>
                {this.state.monthSelected.format('MMMM')}
              </MonthHeader>

              <RightArrowContainer onClick={()=>this.setState((prevState, props)=>({monthSelected: prevState.monthSelected.add(1,'month')}))}>
                <Arrow>
                  <svg focusable='false' viewBox='0 0 1000 1000'>
                    <path d='M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z'>
                    </path>
                  </svg>
                </Arrow>
              </RightArrowContainer>
              
              <WeekdayContainerContainer>
                <WeekdayContainer>
                  <Weekdays>
                    Su
                  </Weekdays>
                  <Weekdays>
                    Mo
                  </Weekdays>
                  <Weekdays>
                    Tu
                  </Weekdays>
                  <Weekdays>
                    We
                  </Weekdays>
                  <Weekdays>
                    Th
                  </Weekdays>
                  <Weekdays>
                    Fr
                  </Weekdays>
                  <Weekdays>
                    Sa
                  </Weekdays>
                </WeekdayContainer>
              </WeekdayContainerContainer>
             </CalendarHeader>
            <MonthContainer>
              <Month datePicker={this.endDatePicker.bind(this)} monthNumber={this.state.monthSelected.get('month')} months={this.getMonthDates.bind(this)} />
            </MonthContainer>
          </CalendarContainer>
          </div>}
      </div>
    )
  }
}

export default Calendar; 

