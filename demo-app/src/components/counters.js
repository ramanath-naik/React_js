import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    render() { 

        console.log("counters-rendered");

        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>( 
            <Counter 
            key={counter.id} //this is used internally by the react, it cannot be accessed
            onIncrement={onIncrement}
            onDelete = {onDelete} 
            counter={counter}
            />
            ))}

        </div>
        );
    }
}
 
export default Counters;