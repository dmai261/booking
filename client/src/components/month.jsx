import React from 'react';
import Week from './week.jsx';
import styled from 'styled-components';

const WeekContainer = styled.div`
  display: table-row;
  vertical-align: middle;
  width: 100%;
`

class Month extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderMonth() {  
    let monthObj = {
      "Sunday": 0,
      "Monday": 1,
      "Tuesday": 2,
      "Wednesday": 3,
      "Thursday": 4,
      "Friday": 5,
      "Saturday": 6,
    };
    let currMonth = this.props.monthNumber;
    let monthData = this.props.months(currMonth);
    let matrix = [[0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0]];
    let row = 0;
    let index = 0;
    let currDate = monthData[index][currMonth].split(",");
    while (index !== monthData.length) {
      for (var col = monthObj[currDate[0]]; col <= 6; col++) {
        matrix[row][col] = Number(currDate[1]);
        index++;

        if (index !== monthData.length) {
          currDate = monthData[index][currMonth].split(",");
        } else {
          return matrix;
        }
      }
      row++;
    }
  }

  render() {
    return (
      <WeekContainer>
        {this.renderMonth().map((week, i)=>{
          return (<Week key={i} week={week}/>)
        })}
      </WeekContainer>
    )
  }
}

export default Month;