import React from 'react';
import styled from 'styled-components'
import FontAwesome from '@fortawesome/fontawesome-free'


const Button = styled.button`
  background: #ffffff
  text-align: left;
  border-radius: 2px;
  padding: 8px;
  display:block;
  width: 100%;
  border: 1px solid #EBEBEB;
`
const LabelForGuests = styled.div`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  color: #484848 !important;

`
const ContainerForGuests = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: middle;
`
const NumberOfGuests = styled.span`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  color: #484848 !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
  font-weight: normal !important;
`
const DropDownListEntries = styled.div`
  font-weight: 600 !important;
   margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 16px !important;
   line-height: 22px !important;
   letter-spacing: normal !important;
   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
   text-transform: undefined !important;
   color: #484848 !important;
   padding-top: undefined !important;
   padding-bottom: undefined !important;
`
const DropDownMenu = styled.div`
  position: relative !important;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
   width: 100% !important;
   min-width: 280px !important;
   text-align: left !important;
   margin-bottom: 16px !important;
   box-sizing: border-box !important;
   z-index: 2 !important;
   left: 0px !important;
   background: rgb(255, 255, 255) !important;
   border-radius: 3px !important;
   padding: 0px 16px !important;
`
const ContainerForDropDown = styled.div`
  width: 100%;
  vertical-align: middle;
`

const PlusMinus = styled.button`
  border-color: rgba(0, 132, 137, 0.3) !important;
   background: transparent !important;
   display: inline-block !important;
   cursor: pointer !important;
   text-align: center !important;
   line-height: 1 !important;
   position: relative !important;
   touch-action: manipulation !important;
   width: 32px !important;
   height: 32px !important;
   box-shadow: none !important;
   border-radius: 50% !important;
   border-style: solid !important;
   border-color: rgb(0, 132, 137) !important;
   background: transparent !important;
   border-width: 1px !important;
`

const DropDownEntryStyle = styled.span`
font-weight: 600 !important;
   margin: 0px !important;
   word-wrap: break-word !important;
   font-size: 16px !important;
   line-height: 22px !important;
   letter-spacing: normal !important;
   font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`
class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: this.props.guests,
      toggle: false
    };
  }
  
  toggleDropDown() {
    this.setState((prevState)=>({toggle:!prevState.toggle}));
  }

  render() {
    let totalGuests = this.props.guests.Adult + this.props.guests.Children
    return (
      <div>
        <div className='guests' >
          <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
            <LabelForGuests>Guests</LabelForGuests>
          </div>
          <Button onClick={()=>this.toggleDropDown()} className='dropbtn'>
            <ContainerForGuests>
              <NumberOfGuests>{totalGuests} {totalGuests > 1 ? 'guests' : 'guest'}</NumberOfGuests>
            </ContainerForGuests>
          </Button>
          <ContainerForDropDown>
          {this.state.toggle &&
          <DropDownMenu className='dropdown-content' id='myDropDown'>
            <div>
              <DropDownListEntries>
                Adults
              </DropDownListEntries>
              <PlusMinus onClick={()=>{this.state.guests.Adult -= 1; this.props.func({guest_info: this.state.guests})}}>
              <DropDownEntryStyle>-</DropDownEntryStyle>
              </PlusMinus>
                <DropDownEntryStyle> {this.state.guests.Adult} </DropDownEntryStyle>
              <PlusMinus onClick={()=>{this.state.guests.Adult += 1; this.props.func({guest_info: this.state.guests})}}>
                <DropDownEntryStyle>+</DropDownEntryStyle>
              </PlusMinus>
            </div>

            <div>
              <DropDownListEntries>
                Childrens
              </DropDownListEntries>
              <PlusMinus onClick={()=>{this.state.guests.Children -= 1; this.props.func({guest_info: this.state.guests})}}>
                <DropDownEntryStyle>-</DropDownEntryStyle>
              </PlusMinus>
                <DropDownEntryStyle> {this.state.guests.Children} </DropDownEntryStyle>
              <PlusMinus onClick={()=>{this.state.guests.Children += 1; this.props.func({guest_info: this.state.guests})}}>
                <DropDownEntryStyle>+</DropDownEntryStyle>
              </PlusMinus>
            </div>

            <div>
              <DropDownListEntries>
                Infants
              </DropDownListEntries>
              <PlusMinus onClick={()=>{this.state.guests.Infants -= 1; this.props.func({guest_info: this.state.guests})}}>
                <DropDownEntryStyle>-</DropDownEntryStyle>
              </PlusMinus>
                <DropDownEntryStyle> {this.state.guests.Infants} </DropDownEntryStyle>
              <PlusMinus onClick={()=>{this.state.guests.Infants += 1; this.props.func({guest_info: this.state.guests})}}>
                <DropDownEntryStyle>+</DropDownEntryStyle>
              </PlusMinus>
            </div>
            </DropDownMenu>}
            </ContainerForDropDown>    
        </div>
      </div>
    )
  }
}
  

export default Guest