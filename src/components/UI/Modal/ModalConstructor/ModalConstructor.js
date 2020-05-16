import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../Backdrop/Backdrop";
import ModalFooter from "../ModalFooter/ModalFooter";
import styles from "./ModalConstructor.module.css"

class modalConstructor extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return this.props.show ? (
            <div className={ styles.modalWrapper }>
                <div className={ styles.modalBodyWrapper }>
                    <p className={ styles.header }>{ this.props.header }</p>
                    { this.props.children }
                    <ModalFooter
                        submitFunction={ this.props.submitFunction }
                        cancelFunction={ this.props.cancelFunction }
                        modalName={ this.props.children.key }/>
                </div>
                <Backdrop clickFunction={ this.props.backdropClickFunction || this.props.cancelFunction }/>
            </div>
        ) : null
    }
}

export default modalConstructor;
