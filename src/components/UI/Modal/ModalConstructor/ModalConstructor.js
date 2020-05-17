import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../Backdrop/Backdrop";
import ModalFooter from "../ModalFooter/ModalFooter";
import Spinner from "../../Spinner/Spinner";
import styles from "./ModalConstructor.module.css"

const modalConstructor = (props) => {
    console.log('rendered');
    return props.show ? (
        <div className={ styles.modalWrapper }>
            <div className={ styles.modalBodyWrapper }>
                <p className={ styles.header }>{ props.header }</p>
                { props.displaySpinner ? <Spinner/> : props.children }
                <ModalFooter
                    submitFunction={ props.submitFunction }
                    cancelFunction={ props.cancelFunction }
                    modalName={ props.children.key }
                    displaySpinner={ props.displaySpinner }/>
            </div>
            <Backdrop clickFunction={ props.backdropClickFunction || props.cancelFunction }/>
        </div>
    ) : null
};

export default modalConstructor;
