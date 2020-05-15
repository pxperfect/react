import React from "react";
import Aux from "../../../../hoc/Aux";
import Backdrop from "../../Backdrop/Backdrop";
import ModalFooter from "../ModalFooter/ModalFooter";
import styles from "./ModalConstructor.module.css"

const modalConstructor = (props) => {
    return (
            <div className={styles.modalWrapper}>
                <div className={styles.modalBodyWrapper}>
                    <p className={styles.header}>{props.header}</p>
                    {props.children}
                    <ModalFooter
                        manageModal={props.manageModal}
                        modalName={props.children.key}/>
                </div>
                <Backdrop clicked={ () => {props.manageModal(props.children.key, 'CLOSE')} }/>
            </div>
    )
};

export default modalConstructor;
