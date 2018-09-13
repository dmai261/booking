import React from 'react';
import Month from './month.jsx'

class Calendar extends React.Component {
    constructor(props) {
        this.state = {
            months: '',
        }
    }

    render() {
        return (
            <div>
                {this.state.months.map(()=>{
                    return <Month calendar={this.props}/>
                })}
            </div>
        )
    }
}

export default Calendar; 