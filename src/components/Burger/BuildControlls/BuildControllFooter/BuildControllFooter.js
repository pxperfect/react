import React from "react";
import styles from './BuildControllFooter.module.css'
import Button from "../../../UI/Button/Button";

const buildControllFooter = (props) => {
    return (
        <div className={styles.buildControllFooterWrapper}>
            <p><strong>{props.totalPrice}$</strong></p>
            <Button
                disabled={props.purchasable}
                clicked={ () => { props.managePurchaseSummaryModal('purchaseModal', 'SHOW')} }
                type='PRIMARY'>
                Order now
            </Button>
        </div>
    )
};

export default buildControllFooter;