import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: {
                breadTop: 1,
                salad: 1,
                bacon: 2,
                meat: 3,
                breadBottom: 1
            }
        }
    }
 
    render() {
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;