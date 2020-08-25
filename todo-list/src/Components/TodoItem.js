import React from 'react';

class TodoItem extends React.Component {
    constructor() {
        super()

        this.displayCreatedAt = this.displayCreatedAt.bind(this);
    }

    displayCreatedAt() {
        return "Created at " + new Date(this.props.todo.createdAt).toUTCString()
    }

    render() {
        return (
            <div>
                <p title={this.displayCreatedAt()}>{this.props.todo.description}</p>
                <hr />
            </div>
        );
    }
}

export default TodoItem;
