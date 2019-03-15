import React from 'react'
import Card from './Card'
import { robots } from './Robots';

const CardList = () => {
    const robotInfo = robots.map( robot => {
        return (<Card name = {robot.name} 
                     username={robot.username} 
                     email = {robot.email} 
                     />)
    });

    return(
        <div>
            {robotInfo}
        </div>
    )
}
export default CardList