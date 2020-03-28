import React from "react";
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
function TodoItem(props) {
    const {id, title, completed} = props.todo;

    const isCompleted = () => {
        if (completed) { return styles.strikethrough }
    };
    const removeTodoHandler = (e) => {
        props.removeTodo(e, id);
    };
    const markTodoAsCompletedHandler = () => {
        props.markTodoAsCompleted(id);
    };
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={props.todo.completed}
                onChange={markTodoAsCompletedHandler}/>
            <p
                className={isCompleted(completed)}>
                {title}
            </p>
            <button
                className={styles.removeButton}
                onClick={removeTodoHandler}>
                Remove
            </button>
        </div>
    )
}

// Proptypes are required to validate type of incoming props.
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;