import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>I'm a person! and I'm {Math.ceil(Math.random() * 2) } years old.</p>
            <p>Honestly I am {props.age} years old and my name is {props.name}</p>
            <p>for state testing : {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;