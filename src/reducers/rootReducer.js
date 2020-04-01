const initState = {
    todos: []
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'SET_TODOS') {
        const todos = prepareTodos(action.todos);
        return {
            todos: todos
        };
    }
    return state;
};

function prepareTodos(todos) {
    const todoCopy = [...todos.slice(0, 20)];
    todoCopy.forEach(todo => todo.visibility = true);
    return todoCopy;
}

export default rootReducer;