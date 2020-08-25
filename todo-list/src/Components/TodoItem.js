import React from 'react';

class TodoItem extends React.Component {
    displayCreatedAt() {
        return "Created at " + new Date(this.props.todo.createdAt).toUTCString();
    }

    displayTodo() {
        const todo = <p title={this.displayCreatedAt()}>{this.props.todo.description}</p>;

        if (this.props.todo.completed) {
            return <del>{todo}</del>;
        }

        return todo;
    }

    render() {
        return (
            <div>
                <input type="checkbox" onClick={() => this.props.checker(this.props.todo.id)} />
                {this.displayTodo()}
                <button onClick={() => this.props.deleter(this.props.todo.id)}>Delete</button>
                <hr />
            </div>
        );
    }
}

export default TodoItem;
