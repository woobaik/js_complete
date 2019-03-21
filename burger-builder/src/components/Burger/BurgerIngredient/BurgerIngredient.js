import React, { Component } from 'react'
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render() {
        let burgerIngre = null

        switch (this.props.type) {
            case "breadBottom":
                burgerIngre = <div className={classes.BreadBottom}></div>
                break;
            case "breadTop":
                burgerIngre = (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>)
                break;
            case "meat":
                burgerIngre = <div className={classes.Meat}></div>
                break;
            case "cheese":
                burgerIngre = <div className={classes.Cheese}></div>
                break;
            case "salad":
                burgerIngre = <div className={classes.Salad}></div>
                break;
            case "bacon":
                burgerIngre = <div className={classes.Bacon}></div>
                break;
            default:
                burgerIngre = null
                break;

        }
        return burgerIngre
    } 
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredient