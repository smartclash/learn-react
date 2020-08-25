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
