import React from 'react';

class Month extends React.Component {
    constructor(props) {
        this.state = {
            month: '',
            days: '',
        }
    }

    render() {
        return (
            <div>
                {this.state.days.map((day)=>{
                    return <Day day={day}/>
                })}
            </div>
        )
    }
}

export default Month;