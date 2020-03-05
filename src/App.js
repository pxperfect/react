import React from 'react';
import './App.css';
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
                completed: true
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
        console.log(id)
    };

    render() {
        // Passing data between component is available through "props"
        // Props are custom JSX(HTML) attributes which are available later in receiving component.
        return (
            <div className="App">
                <Todos todos={this.state.todos} markTodoAsCompleted={this.markTodoAsCompleted}/>
            </div>
        );
    }
}


export default App;
