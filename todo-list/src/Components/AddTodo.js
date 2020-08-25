import React from 'react';

class AddTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handler} id="add-todo">
                <input name="description" type="text" /> <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddTodo;
