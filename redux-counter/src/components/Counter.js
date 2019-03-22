import React from 'react';
import { black } from 'ansi-colors';
import './Counter.css'

const Counter = ({onIncrement, onDeclement, onSetColor, number, color}) => {
    return(
        <div className="Counter"
             onClick={onIncrement}
             onContextMenu={(e) => {
                 e.preventDefault()
                 onDeclement()
             }}
             onDoubleClick={onSetColor}
             style={{backgroundColor: color}}>
             {number}
        </div>
    );
};

Counter.defaultProps = {
    onIncrement: () => console.log("Increament!"),
    onDeclement: () => console.log("Decrement"),
    onSetColor: () => console.warn("onSetColor is not defined"),
    number: 0,
    color:black,
    
};

export default Counter;