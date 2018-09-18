import React from 'react';
import styled from 'styled-components';

const DayContainer = styled.span`
  display: table-cell;
  width: 41px;
  height: 40px;
  border: 1px solid rgb(228, 231, 231);
  color: rgb(72, 72, 72);
  background: rgb(255, 255, 255);
  text-align: center;
  padding-top: 10px;
`

const Day = styled.span`
  font-size: 14px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 700 !important;
`

const Week = (props) => {
  return (
    <div>
      {props.week.map((day, i)=>{
        if (day > 0) {
          return (<DayContainer key={i}><Day key={i}>{day}</Day></DayContainer>)
        } else {
          return (<DayContainer key={i}><Day key={i}></Day></DayContainer>)
        }
      })}
    </div>
  )
}

export default Week;