import React from 'react';

class AddPerson extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handler} id="add-person">
                    <input name="name" type="text" placeholder="Enter your name" /> <br />
                    <input name="age" type="number" placeholder="Enter your age" /> <br />
                    <input name="location" type="location" placeholder="Enter your location" /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddPerson;
