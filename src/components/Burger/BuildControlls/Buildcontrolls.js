import React from "react";
import BuildControll from "./BuildControll/BuildControll";
import BuildControllFooter from "./BuildControllFooter/BuildControllFooter";
import styles from './BuildControlls.module.css';

const buildControlls = (props) => {
    const controlls = [];
    const ingredientsKeys = Object.keys(props.ingredients);
    ingredientsKeys.forEach((ingredient, index) => {
        let label = ingredientsKeys[index];
        const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        controlls.push({label: formattedLabel, price: props.ingredients[label].price});
    });

    return (
        <div>
            <ul className={styles.buildControllWrapper}>
                {controlls.map(controll => {
                    return (
                        <li
                            key={Math.random()}
                            className={styles.buildControllUlWrapper}>
                            <BuildControll
                                label={controll.label}
                                price={controll.price}
                                key={Math.random()}
                                manageIngredientCount={props.manageIngredientCount}
                            />
                        </li>)
                })}
            </ul>
            <BuildControllFooter
                totalPrice={props.totalPrice}
                purchasable={props.purchasable}
                managePurchaseSummaryModal={props.managePurchaseSummaryModal}/>
        </div>
    )
};

export default buildControlls;
