import React from "react";
import styles from './PurchaseModal.module.css'

const purchaseModal = (props) => {
    const ingredients = {...props.ingredients};
    const ingredientsKeys = Object.keys(ingredients);
    return (
            <ul className={styles.purchaseModalUl}>{
                ingredientsKeys.map(ingredient => {
                    const ingredientObject = ingredients[ingredient];
                    return (
                        <li
                            key={ Math.random() }
                            className={ styles.purchaseModalLi }>
                            { `${ingredientObject.amount}x ${ingredient} ` }<strong>{ ingredientObject.price }$</strong>
                        </li>
                    )
                })
            }</ul>
    )
};

export default purchaseModal;