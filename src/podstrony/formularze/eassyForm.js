import React from 'react';

class EassyForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {tekst: "Domyślny tekst"};
    }

    handleChange = (e) => {
        this.setState({
            tekst: e.target.value
        });
    }

    handleSubmit = (e) => {
        alert("Podano imię: " + this.state.tekst);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Wypracowanie:
                    <textarea value={this.state.tekst} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default EassyForm;