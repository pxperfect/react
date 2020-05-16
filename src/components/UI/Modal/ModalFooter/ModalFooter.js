import React from "react";
import styles from './ModalFooter.module.css'
import Button from "../../Button/Button";

const modalFooter = (props) => {
    return (
        <div className={styles.modalFooterWrapper}>
            <Button
                clicked={ props.submitFunction }
                type='PRIMARY'>
                Continue
            </Button>
            <Button
                clicked={ props.cancelFunction }
                type='DANGER'>
                Close
            </Button>
        </div>
    )
};

export default modalFooter;
