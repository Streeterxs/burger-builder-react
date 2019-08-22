import React, { Component } from 'react'

import Aux from '../hoc/Aux'
import Burger from '../Components/Burger/Burger'

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 1,
            salad: 1,
            bacon: 2,
            cheese: 2,
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <div>BurgerControls</div>
            </Aux>
        )
    }
}