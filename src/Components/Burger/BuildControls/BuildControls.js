import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(control => <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    add={() => props.ingredientAdd(control.type)} 
                    remove={() => props.ingredientRemove(control.type)}
                    disabled={props.disabled[control.type]}/>)
            }
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>ORDER NOW!</button>
        </div>
    )
}

export default buildControls