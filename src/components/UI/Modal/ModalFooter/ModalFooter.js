import React from "react";
import styles from './ModalFooter.module.css'
import Button from "../../Button/Button";

const modalFooter = (props) => {
    return (
        <div className={styles.modalFooterWrapper}>
            <Button
                clicked={ () => {props.manageModal(props.modalName, 'CLOSE')} }
                type='PRIMARY'>
                Continue
            </Button>
            <Button
                clicked={ () => {props.manageModal(props.modalName, 'CLOSE')} }
                type='DANGER'>
                Close
            </Button>
        </div>
    )
};

export default modalFooter;
