// React.
import React from "react";
// Higher order components.
import Aux from "../../hoc/Aux";
// Components.
import Navigation from "../Navigation/Navigation";
// CSS.
import styles from './Layout.module.css'
import cssreset from '../../common/styles/styles.css'
// Components.

const layout = (props) => (
    <Aux>
        <Navigation/>
        {/*<div>Toolbar, SideDrawer, Backdrop</div>*/}
        <main className={styles.content}>{props.children}</main>
    </Aux>
);

export default layout;
