import React from 'react';

const Guest = (props) => {
  state = props.guests;

  return (
    <div className="guests">
      <button onClick={()=>func()} className="dropDown" >{props.guests.Adult + props.guests.Children} guest</button>
        <div className="dropDownMenu">
          <div>
            <span onClick={()=>{state.Adult -= 1; props.func({guest_info: state})}}>
              -
            </span>
            <span className = "Adult">
              Adult
            </span>
            <span onClick={()=>{state.Adult += 1; props.func({guest_info: state})}}>
              +
            </span>
          </div>

          <div>
            <span onClick={()=>{state.Children -= 1; props.func({guest_info: state})}}>
              -
            </span>
            <span className = "Children">
              Adult
            </span>
            <span onClick={()=>{state.Children += 1; props.func({guest_info: state})}}>
              +
            </span>
          </div>

          <div>
            <span onClick={()=>{state.Infants -= 1; props.func({guest_info: state})}}>
              -
            </span>
            <span className = "Infant">
              Adult
            </span>
            <span onClick={()=>{state.Infants += 1; props.func({guest_info: state})}}>
              +
            </span>
          </div>
        </div>
    </div>
  )
}

export default Guest