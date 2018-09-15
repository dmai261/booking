import React from 'react';
import Month from './month.jsx'
import styled from 'styled-components'

const LabelForDates = styled.div`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  color: #484848 !important;
`
const StyledWordCheckIn = styled.div`
  font-weight: normal !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  margin: 0px !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  display: inline-block !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
`

const StyledWordCheckOut = styled.span`
  font-weight: normal !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  margin: 0px !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
`
const StyledArrow = styled.div`
  color: #757575 !important;
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
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: '',
    }
  }

  render() {
    return (
      <div>
        <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
          <LabelForDates>
            Dates
          </LabelForDates>
        </div>
        <CheckInOutContainer >
          <div style={{"fontWeight":"600"}}>
          <StyledWordContainer>

              <StyledWordCheckIn>
                <div style={{"whiteSpace": "no-wrap", "overflow":"hidden"}}>
                Check in
                </div>
              </StyledWordCheckIn>

              <StyledArrow>
                ->
              </StyledArrow>

              <StyledWordCheckOut>
                Check out
              </StyledWordCheckOut>

          </StyledWordContainer>
          </div>
        </CheckInOutContainer>
        {/* {this.state.months.map(()=>{
            return <Month calendar={this.props}/>
        })} */}
      </div>
    )
  }
}

export default Calendar; 