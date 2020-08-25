import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>My name is: {this.props.name}</li>
                    <li>My age is: {this.props.age}</li>
                    <li>I live in: {this.props.location}</li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Person;
