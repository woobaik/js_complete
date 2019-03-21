import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients).map(item => {
        return [...Array(props.ingredients.item)].map((_, i) => {
            return <BurgerIngredient keys={item + i} type={item} />
        })
    })
    return(
        <div className={classes.Burger}>
            {transformedIngredient}
        </div>
        
    )
}

export default Burger