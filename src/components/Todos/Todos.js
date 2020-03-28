import React from 'react';
import PropTypes from 'prop-types';
// Components
import TodoItem from '../TodoItem/TodoItem';

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
function Todos(props) {
    const todoFilter = props.todos.filter(todo => todo.visibility);
    if (todoFilter.length) {
        return (
            todoFilter.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        markTodoAsCompleted={props.markTodoAsCompleted}
                        removeTodo={props.removeTodo}
                    />
                )
            })
        );
    }
    return <p>No results</p>;
}

// Proptypes are required to validate type of incoming props.
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;