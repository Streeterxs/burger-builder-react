import React, { Component } from 'react'

import Aux from '../hoc/Aux'
import Burger from '../Components/Burger/Burger'
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Modal from '../Components/UI/Modal/Modal'
import OrderSummary from '../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    meat: 1.3,
    cheese: 0.9,
    bacon: 0.8
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    orderPurchasing = () => {
        this.setState({purchasing: true});
    }

    orderClose = () => {
        this.setState({purchasing: false});
    }

    burgerPurchasableUpdate = (ingredients) => {
        const purchasableUpdate = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey];
        }).reduce((sum, el) => {
            console.log(sum);
            console.log(el);
            return sum + el
        });
        this.setState({
            purchasable: purchasableUpdate > 0
        });
    }

    addIngredientsHandler = (type) =>{
        const updatedIngredient = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredient;
        const priceAddition = INGREDIENTS_PRICES[type];
        this.setState((prevState) => {
            return {
                totalPrice: prevState.totalPrice + priceAddition,
                ingredients: updatedIngredients
            }
        })
        this.burgerPurchasableUpdate(updatedIngredients);
    }

    removeIngredientsHandler = (type) =>{
        if(this.state.ingredients[type] > 0){
            const updatedIngredient = this.state.ingredients[type] - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedIngredient;
            const priceAddition = INGREDIENTS_PRICES[type];
            this.setState((prevState) => {
                return {
                    totalPrice: prevState.totalPrice - priceAddition,
                    ingredients: updatedIngredients
                }
            })
            this.burgerPurchasableUpdate(updatedIngredients);
        }        
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let ing in disabledInfo){
            disabledInfo[ing] = disabledInfo[ing] <= 0;
        }
        return (
            <Aux>
                <Modal modalOpen={this.state.purchasing} modalClose={this.orderClose}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                ingredientAdd={this.addIngredientsHandler} 
                ingredientRemove={this.removeIngredientsHandler} 
                disabled={disabledInfo}
                purchasing={this.orderPurchasing}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}/>
            </Aux>
        )
    }
}