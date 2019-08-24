import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const Burger = (props) => {
    console.log(props.ingredients)
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    });
    console.log(ingredients);
    if(ingredients.length === 0){
        ingredients = <p>Start selecting your ingredients!</p>
    }
    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {ingredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
    )
}

export default Burger