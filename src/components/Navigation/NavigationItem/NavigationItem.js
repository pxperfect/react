import React from "react";
import styles from './NavigationItem.module.css'

const navigationItem = (props) => {
    return (
        <li
            className={[styles.navigationItem, props.active ? styles.active : null].join(' ')}>
            <a href='/#'>{props.children}</a>
        </li>
    )
};

export default navigationItem;