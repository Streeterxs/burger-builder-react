import React from 'react'

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const listOfOrderedIngredients = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <p>Your Order Summary</p>
            <ul>{listOfOrderedIngredients}</ul>
            <p>Finish Order</p>
        </Aux>
    )
}

export default orderSummary