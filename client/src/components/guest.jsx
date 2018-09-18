import React from 'react';
import styled from 'styled-components'

const Button1 = styled.button`
  background: #ffffff;
  text-align: left;
  border-radius: 2px;
  padding: 8px;
  display:block;
  width: 100%;
  border: 1px solid #EBEBEB;
`

const Button2 = styled.button`
  text-align: left;
  line-height: normal;
  display: block;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  padding: 8px;
  border-width: 1px 1px 2px;
  border-style: solid;
  border-color: rgb(235, 235, 235) rgb(235, 235, 235) rgb(0, 132, 137);
  border-image: initial;
  border-bottom: 2px solid rgb(0, 132, 137);
`
const LabelForGuests = styled.div`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;

`
const ContainerForGuests = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: middle;
`
const NumberOfGuests = styled.span`
  margin: 0px;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  font-weight: normal;
`
const DropDownListEntries = styled.div`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  display: inline-block;
`
const DropDownMenu = styled.div`
  margin-bottom:16px;
  margin-top: 8px;
`
const ContainerForDropDown = styled.div`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  width: 100%;
  max-width: 326px;
  vertical-align: middle;
  text-align: left;
  margin-bottom: 16px;
  box-sizing: border-box;
  z-index: 2;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 0px 16px;
`
const Table = styled.div`
  display: table;
  width: 100%;
`

const InnerTable = styled.div`
  display: table;
  width: 120px;
`

const Cell = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: middle;
`

const PlusMinus = styled.button`
  border-color: rgba(0, 132, 137, 0.3);
  background: transparent;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  position: relative;
  touch-action: manipulation;
  width: 32px;
  height: 32px;
  box-shadow: none;
  border-radius: 50%;
  border-style: solid;
  border-color: rgb(0, 132, 137);
  background: transparent;
  border-width: 1px;
`
const DisabledPlusMinus = styled(PlusMinus)`
  border-color: rgba(0, 132, 137, 0.3);
  background: transparent;
`

const DropDownEntryStyle = styled.span`
  color: rgb(0, 132, 137);
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: normal;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`
const DisabledDropDownEntryStyle = styled(DropDownEntryStyle)`
  color: rgba(0, 132, 137, 0.3) !important;
  background: transparent;
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
        <div>
          <div style={{"marginTop":"16px", "marginBottom":"8px"}}>
            <LabelForGuests>Guests</LabelForGuests>
          </div>
          
            {!this.state.toggle ?
            <Button1 onClick={()=>this.toggleDropDown()} className='dropbtn'>
              <ContainerForGuests>
                <NumberOfGuests>{totalGuests} {totalGuests > 1 ? 'guests' : 'guest'}</NumberOfGuests>
              </ContainerForGuests>
            </Button1>
            : <Button2 onClick={()=>this.toggleDropDown()} className='dropbtn'>
            <ContainerForGuests>
              <NumberOfGuests>{totalGuests} {totalGuests > 1 ? 'guests' : 'guest'}</NumberOfGuests>
            </ContainerForGuests>
            </Button2>}

          <div style={{"textAlign":"center"}}>
            {this.state.toggle &&
            <ContainerForDropDown>
              <DropDownMenu>
                <div style={{"marginTop":"16px", "marginBottom":"16px"}}>
                  <Table>
                    <Cell>
                      <DropDownListEntries>
                        Adults
                      </DropDownListEntries>
                    </Cell>

                    <Cell>
                      <InnerTable>
                        <div style={{"display":"table-cell","textAlign":"left"}}>  
                        {this.state.guests.Adult !== 0 ?
                          <PlusMinus onClick={()=>{this.state.guests.Adult -= 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>-</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>-</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"middle"}}>
                          <DropDownEntryStyle>{this.state.guests.Adult}</DropDownEntryStyle>
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"right"}}>
                        {this.state.guests.Adult + this.state.guests.Children !== 2 ?
                          <PlusMinus onClick={()=>{this.state.guests.Adult += 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>+</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>+</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                      </InnerTable>
                    </Cell>
                  </Table>
                </div>

                <div style={{"marginTop":"16px", "marginBottom":"16px"}}>
                  <Table>
                    <Cell>
                      <DropDownListEntries>
                        Childrens
                      </DropDownListEntries>

                    </Cell>

                    <Cell>
                      <InnerTable>
                        <div style={{"display":"table-cell","textAlign":"left"}}>
                          {this.state.guests.Children !== 0 ?
                          <PlusMinus onClick={()=>{this.state.guests.Children -= 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>-</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>-</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"middle"}}>
                          <DropDownEntryStyle>{this.state.guests.Children}</DropDownEntryStyle>
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"right"}}>
                        {this.state.guests.Adult + this.state.guests.Children !== 2 ?
                          <PlusMinus onClick={()=>{this.state.guests.Children += 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>+</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>+</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                      </InnerTable>
                    </Cell>
                  </Table>
                </div>

                <div style={{"marginTop":"16px", "marginBottom":"16px"}}>
                  <Table>
                    <Cell>
                      <DropDownListEntries>
                        Infants
                      </DropDownListEntries>
                    </Cell>

                    <Cell>
                      <InnerTable>
                        <div style={{"display":"table-cell","textAlign":"left"}}>  
                        {this.state.guests.Infants !== 0 ?
                          <PlusMinus onClick={()=>{this.state.guests.Infants -= 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>-</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>-</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"middle"}}>
                          <DropDownEntryStyle>{this.state.guests.Infants}</DropDownEntryStyle>
                        </div>
                          
                        <div style={{"display":"table-cell","textAlign":"right"}}>  
                        {this.state.guests.Infants !== 5 ?
                          <PlusMinus onClick={()=>{this.state.guests.Infants += 1; this.props.func({guest_info: this.state.guests})}}>
                            <DropDownEntryStyle>+</DropDownEntryStyle>
                          </PlusMinus>
                          : <DisabledPlusMinus>
                              <DisabledDropDownEntryStyle>+</DisabledDropDownEntryStyle>
                            </DisabledPlusMinus>}
                        </div>
                      </InnerTable>
                    </Cell>
                  </Table>
                </div>
              </DropDownMenu>
            </ContainerForDropDown>}
          </div>
        </div>
      </div>
    )
  }
}
  

export default Guest