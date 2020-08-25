import React from 'react';

import Person from './Components/Person';
import AddPerson from './Components/AddPerson';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            persons: []
        }

        this.handleAddPerson = this.handleAddPerson.bind(this);
        this.displayHelp = this.displayHelp.bind(this);
    }

    buildPersonComponents() {
        return this.state
            .persons.map(person => <Person key={person.id} name={person.name} location={person.location} age={person.age} />);
    }

    handleAddPerson(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        document.getElementById('add-person').reset();

        this.setState(oldState => {
            const id = oldState.persons.length + 1;

            return {
                persons: [
                    ...oldState.persons,
                    {
                        id,
                        name: data.get('name'),
                        location: data.get('location'),
                        age: data.get('age')
                    }
                ]
            };
        });
    }

    displayHelp() {
        if (this.state.persons.length) {
            return ;
        }

        return (
            <h3>Fill the form below and submit it to see the magic!</h3>
        );
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                {this.displayHelp()}
                {this.buildPersonComponents()}
                <AddPerson handler={this.handleAddPerson} />
            </div>
        );
    }
}

export default App;
