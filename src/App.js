import React from 'react';
import './App.css';
import styles from './App.module.css'
// Components
import Todos from "./components/Todos";

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
class App extends React.Component {
    // State is component data container.
    state = {
        todos: [
            {
                id: 1,
                title: 'todo 1',
                completed: false
            },
            {
                id: 2,
                title: 'todo 2',
                completed: false
            },
            {
                id: 3,
                title: 'todo 3',
                completed: false
            },
        ]
    };
    markTodoAsCompleted = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            })
        })
    };
    removeTodo = (id) => {
        const todoCopy = this.state.todos.slice();
        const todoIndex = todoCopy.findIndex(todo => {
            return todo.id === id;
        });
        todoCopy.splice(todoIndex, 1);
        this.setState({todos: todoCopy});
    };

    render() {
        // Passing data between component is available through "props"
        // Props are custom JSX(HTML) attributes which are available later in receiving component.
        return (
            <div className={styles.wrapper}>
                <Todos
                    todos={this.state.todos}
                    markTodoAsCompleted={this.markTodoAsCompleted}
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}


export default App;
