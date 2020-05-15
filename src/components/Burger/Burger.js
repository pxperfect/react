// React.
import React from "react";
// Components.
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// Styles.
import styles from './Burger.module.css'

const burger = (props) => {
    const ingredients = {...props.ingredients};
    const ingredientsKeys = Object.keys(ingredients);
    const ingredientsComposition = [];

    ingredientsKeys.forEach(key => {
        const counter = ingredients[key].amount;
        for (let i = 0; i < counter; i++) {
            const ingredient = <BurgerIngredient key={Math.random()} type={`${key}`}/>;
            ingredientsComposition.push(ingredient)
        }
    });

    if (!ingredientsComposition.length) {
        ingredientsComposition.push(<p key={Math.random()}>Please select ingredients.</p>)
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {ingredientsComposition}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    )
};

export default burger;
