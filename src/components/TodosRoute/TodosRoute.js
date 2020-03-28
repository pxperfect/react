// React
import React from 'react';
import '../../App.css';
import styles from './TodosRoute.module.css'
// Components
import Todos from "../Todos/Todos";
import TodoSearch from "../TodoSearch/TodoSearch";
import AddTodo from "../AddTodo/AddTodo";

// Class component need to be extended by React.Component object.
// Class components are available to have they own state
class TodosRoute extends React.Component {
    // componentDidMount lifecycle method
    componentDidMount() {
        this.setTodos();
    }
    // State is component data container.
    state = {
        todos: [],
    };
    fetchTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();
    };
    setTodos = async () => {
        const todos = [...await this.fetchTodos()];
        todos.length = 10;
        todos.forEach(todo => todo.visibility = true);
        this.setState({todos: todos});
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
    removeTodo = (e, id) => {
        const filteredTodos = this.state.todos.filter(todo => {
                return todo.id !== id;
            });
        this.setState({todos: filteredTodos});
    };
    search = (e) => {
        const searChInputValue = e.target.value;
        const currentTodos = [...this.state.todos];

        currentTodos.forEach(todo => {
            todo.visibility = true;
            todo.visibility = todo.title.includes(searChInputValue);
        });

        this.setState({todos: currentTodos});
    };
    addTodo = (e) => {
        e.preventDefault();
        const newTodoId = this.state.todos.length + 1;
        const newTodoName = e.target.elements.namedItem('newTodo').value;
        const newTodo = {
            id: newTodoId,
            title: newTodoName,
            visibility: true,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    render() {
        // Passing data between component is available through "props"
        // Props are custom JSX(HTML) attributes which are available later in receiving component.
        return (
            <div className={styles.wrapper}>
                <TodoSearch search={this.search}/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos
                    todos={this.state.todos}
                    markTodoAsCompleted={this.markTodoAsCompleted}
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}


export default TodosRoute;
