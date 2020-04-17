import React from 'react';

import EassyForm from './eassyForm';
import FlaovorForm from './flavorForm';

class NameForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {imie: ""};
    }

    handleChange = (e) => {
        this.setState({
            imie: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert("Podano imię: " + this.state.imie);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
                    <input type="text" value={this.state.imie} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

function Formularze(){
    return(
        <div>
            <NameForm />
            <hr />
            <EassyForm />
            <hr />
            <FlaovorForm />
        </div>
    );
}

export default Formularze;