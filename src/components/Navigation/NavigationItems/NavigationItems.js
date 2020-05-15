import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={styles.navigationItems}>
            <NavigationItem>Menu</NavigationItem>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem active>Burger</NavigationItem>
        </ul>
    )
};

export default navigationItems;