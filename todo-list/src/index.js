import React from 'react';
import ReactDOM from 'react-dom';

import AddTodo from './Components/AddTodo';
import TodoItem from './Components/TodoItem';

class App extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };

        this.displayHelp = this.displayHelp.bind(this);
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCheckboxTodo = this.handleCheckboxTodo.bind(this);
    }

    displayHelp() {
        if (this.state.todos.length) {
            return ;
        }

        return <h2>You can add todos by using the form below</h2>;
    }

    displayTodo() {
        return this.state.todos
            .map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                deleter={this.handleDeleteTodo}
                checker={this.handleCheckboxTodo}
            />);
    }

    /**
     * @param {React.FormEvent<HTMLFormElement>} e 
     */
    handleNewTodo(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        document.forms.namedItem('add-todo').reset();

        this.setState(oldState => {
            const id = oldState.todos.length + 1;

            return {
                todos: [
                    ...oldState.todos,
                    {
                        id,
                        createdAt: +new Date(),
                        description: data.get('description'),
                        completed: false
                    }
                ]
            }
        });
    }

    handleDeleteTodo(id) {
        const freshTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: freshTodos });
    }

    handleCheckboxTodo(id) {
        const freshTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed }
            }

            return todo;
        });

        this.setState({ todos: freshTodos });
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                {this.displayHelp()}
                {this.displayTodo()}
                <AddTodo handler={this.handleNewTodo} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
