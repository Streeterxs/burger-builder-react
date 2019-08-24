import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const listOfOrderedIngredients = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <p>Your Order Summary</p>
            <ul>{listOfOrderedIngredients}</ul>
            <p>Finish Order</p>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary