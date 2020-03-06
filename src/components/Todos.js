import React from 'react';
import PropTypes from 'prop-types';
// Components
import TodoItem from './TodoItem';

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
class Todos extends React.Component {
    // Render method has to return JSX and have at least on wrapping element.
    // this.props is object which was passed by parent component via custom JSX(HTML) attribute.
    render() {
        return (
            this.props.todos.map(data => {
                return (
                        <TodoItem
                            key={data.id}
                            data={data}
                            markTodoAsCompleted={this.props.markTodoAsCompleted}
                            removeTodo={this.props.removeTodo}
                        />
                    )
            })
        );
    }
}

// Proptypes are required to validate type of incoming props.
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;