import React from "react";
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
class TodoItem extends React.Component {
    // Render method has to return JSX and have at least on wrapping element.
    isCompleted = () => {
        if (this.props.data.completed) { return styles.strikethrough }
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    onChange={this.props.markTodoAsCompleted}
                />
                <p className={this.isCompleted()}>
                    {this.props.data.title}
                </p>
            </div>
        )
    }
}

// Proptypes are required to validate type of incoming props.
TodoItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default TodoItem;