import React from "react";
import styles from './AddTodo.module.css';

function AddTodo (props) {
    return (
        <div>
            <form
                className={styles.addTodoWrapper}
                onSubmit={props.addTodo}>
                <input
                    id="addTodoInput"
                    type="text"
                    name="newTodo"
                    placeholder="Todo name"
                    className={styles.addTodoInput}
                />
                <button
                    type="submit"
                    id="addTodoButton"
                    className={styles.addTodoButton}
                >Add</button>
            </form>
        </div>
    )
}

export default AddTodo;