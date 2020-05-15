import React from "react";
import Aux from "../../../../hoc/Aux";
import Backdrop from "../../Backdrop/Backdrop";
import ModalFooter from "../ModalFooter/ModalFooter";
import styles from "./ModalConstructor.module.css"

class modalConstructor extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return this.props.show ? (
            <div className={styles.modalWrapper}>
                <div className={styles.modalBodyWrapper}>
                    <p className={styles.header}>{this.props.header}</p>
                    {this.props.children}
                    <ModalFooter
                        manageModal={this.props.manageModal}
                        modalName={this.props.children.key}/>
                </div>
                <Backdrop clicked={() => {
                    this.props.manageModal(this.props.children.key, 'CLOSE')
                }}/>
            </div>
        ) : null
    }
};

export default modalConstructor;
