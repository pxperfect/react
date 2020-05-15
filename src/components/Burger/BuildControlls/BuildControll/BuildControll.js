import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import Button from "../../../UI/Button/Button";
import styles from './BuildControll.module.css';

const buildControll = (props) => {
    const dupa = (
        <div className={styles.wrapper}>
            <label>{props.label} ({props.price}$)</label>
            <FontAwesomeIcon
                className={[styles.icon, styles.iconPlus].join(' ')}
                icon={faPlusSquare}
                onClick={ () => props.manageIngredientCount(props.label.toLowerCase(), 'INCREMENT') }/>
            <FontAwesomeIcon
                className={[styles.icon, styles.iconMinus].join(' ')}
                icon={faMinusSquare}
                onClick={ () => props.manageIngredientCount(props.label.toLowerCase(), 'DECREMENT') }/>
        </div>
    );
    return (
        <div className={styles.wrapper}>
            <label>{props.label} ({props.price}$)</label>
            <Button
                type='PRIMARY'
                clicked={ () => {props.manageIngredientCount(props.label.toLowerCase(), 'INCREMENT')} }>
                <FontAwesomeIcon icon={faPlusSquare}/>
            </Button>
            <Button
                type='DANGER'
                clicked={ () => {props.manageIngredientCount(props.label.toLowerCase(), 'DECREMENT')} }>
                <FontAwesomeIcon icon={faMinusSquare}/>
            </Button>
        </div>
    )
};

export default buildControll;
