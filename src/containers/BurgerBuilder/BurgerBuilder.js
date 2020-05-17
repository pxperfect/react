// React.
import React from "react";
// Higher order components.
import Aux from "../../hoc/Aux/Aux";
// Components.
import Burger from "../../components/Burger/Burger";
import BuildControlls from "../../components/Burger/BuildControlls/Buildcontrolls";
import ModalConstructor from "../../components/UI/Modal/ModalConstructor/ModalConstructor";
import PurchaseModal from "../../components/Burger/PurchaseModal/PurchaseModal";
// Styles.
import styles from './BurgerBuilder.module.css'
// Axios.
import axios from '../../axios/axios-orders';

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
        displaySpinner: false
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

    submitOrder = async () => {
        const order = {
            ingredients: {...this.state.ingredients},
            price: this.state.totalPrice,
            customer: {
                id: 1,
                name: 'Marcin',
                address: {
                    street: 'TestStreet',
                    zipCode: '222-030',
                    country: 'Poland'
                },
                email: 'test@email.com'
            },
            deliveryMethod: 'fastest'
        };

        this.setState({spinner: true});

        console.log(this.state.displaySpinner);
        axios.post('/orders.json', order).then(response => {
            console.log(response);
            console.log(this.state.displaySpinner);
            this.setState({spinner: false});
        })
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlls
                    ingredients={ this.state.ingredients }
                    totalPrice={ this.state.totalPrice }
                    purchasable={ this.state.purchasable }
                    managePurchaseSummaryModal={ this.manageModal }
                    manageIngredientCount={ this.manageIngredientCount }/>
                {/*modals etc...*/}
                <ModalConstructor
                    show={this.state.purchaseModal}
                    submitFunction={ () => {this.submitOrder()} }
                    cancelFunction={ () => {this.manageModal('purchaseModal', 'CLOSE')} }
                    displaySpinner={ this.state.displaySpinner }
                    header='Purchase summary'>
                    <PurchaseModal
                        key='purchaseModal'
                        ingredients={ this.state.ingredients }/>
                </ModalConstructor>
            </Aux>
        )
    }
}

export default BurgerBuilder;
