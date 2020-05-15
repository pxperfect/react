import React from "react";
import styles from './Button.module.css';

const button = (props) => {
    return (
        <button
            disabled={ props.disabled }
            onClick={ props.clicked }
            className={ [styles.button, props.type === 'PRIMARY' ? styles.primaryButton : styles.dangerButton].join(' ') }>
            {props.children}
        </button>
    );
};

export default button;