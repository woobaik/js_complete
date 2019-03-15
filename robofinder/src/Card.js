import React, { Component } from 'react'

class Card extends Component {
    render(){
        const { name, username, email } = this.props
        return ( 
            <div>
                <img src={`https://robohash.org/${username}?size-200x200`} alt="robot-pic" key={`${this.props.id}`}/>
                {name}
                {username}
                {email}
                
            </div>
        )
    }
        
}


export default Card

// name username email