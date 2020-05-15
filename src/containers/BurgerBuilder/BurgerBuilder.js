// React.
import React from "react";
// Higher order components.
import Aux from "../../hoc/Aux";
// Components.
import Burger from "../../components/Burger/Burger";
import BuildControlls from "../../components/Burger/BuildControlls/Buildcontrolls";
import ModalConstructor from "../../components/UI/Modal/ModalConstructor/ModalConstructor";
import PurchaseModal from "../../components/Burger/PurchaseModal/PurchaseModal";
// Styles.
import styles from './BurgerBuilder.module.css'

class BurgerBuilder extends React.Component{
    state = {
        ingredients: {
            salad: {amount: 0, price: 2},
            bacon: {amount: 0, price: 3},
            cheese: {amount: 0, price: 4},
            meat: {amount: 0, price: 5}
        },
        totalPrice: 0,
        purchasable: true,
        purchaseModal: false,
    };

    manageIngredientCount = (ingredientName, operationType) => {
        const ingredients = {...this.state.ingredients};
        let totalPrice = this.state.totalPrice;

        if (operationType === 'INCREMENT') {
            ingredients[ingredientName].amount += 1;
            totalPrice += ingredients[ingredientName].price
        }
        if (operationType === 'DECREMENT' && ingredients[ingredientName].amount > 0) {
            ingredients[ingredientName].amount -= 1;
            totalPrice -= ingredients[ingredientName].price
        }
        this.setState({ingredients: ingredients, totalPrice: totalPrice});
        this.checkPurchasable()
    };

    checkPurchasable = () => {
        const ingredients = {...this.state.ingredients};
        const totalIngredients = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient].amount)
            .reduce((a, b) => a+b);
        this.setState({purchasable: !totalIngredients > 0})
    };

    manageModal = (modalName, action) => {
        const state = {...this.state};
        state[modalName] = action === 'SHOW';
        this.setState(state)
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlls
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    managePurchaseSummaryModal={this.manageModal}
                    manageIngredientCount={this.manageIngredientCount}/>
                <ModalConstructor
                    show={this.state.purchaseModal}
                    manageModal={this.manageModal}
                    header='Purchase summary'>
                    <PurchaseModal
                        key='purchaseModal'
                        ingredients={this.state.ingredients}/>
                </ModalConstructor>
            </Aux>
        )
    }
}

export default BurgerBuilder;
