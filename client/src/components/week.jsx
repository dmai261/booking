import React from 'react';
import styled from 'styled-components';

const DayContainer = styled.td` 
  width: 41px;
  height: 40px;
  border: 1px solid rgb(228, 231, 231);
  color: rgb(72, 72, 72);
  background: rgb(255, 255, 255);
  text-align: center;

  &:hover {
    background: rgb(228, 231, 231);
  }
`

const Day = styled.span`
  font-size: 14px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 700 !important;
  user-select: none;  
`

const Week = (props) => {
  return (
    <tr>
      {props.week.map((day, i)=>{
        if (day[0] > 0) {
          return (<DayContainer onClick={()=>props.datePicker(day[1])} key={i}><Day key={i}>{day[0]}</Day></DayContainer>)
        } else {
          return (<DayContainer style={{"border":"0px"}} key={i}><Day key={i}></Day></DayContainer>)
        }
      })}
    </tr>
  )
}

export default Week;