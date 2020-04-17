import React from 'react';

class FlaovorForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {smak: "kokosowy"};
    }

    zamien = (e) => {
        this.setState({
            smak: e.target.value
        });
    }

    wyslij = (e) => {
        alert('Twój ulubiony smak to: ' + this.state.smak);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.wyslij}>
                <label>
                    Wybierz swój ulubiony smak:
                    <select value={this.state.smak} onChange={this.zamien}>
                        <option value="grejfrutowy"> Grejfrutowy </option>
                        <option value="ananasowy"> Ananasowy </option>
                        <option value="kokosowy"> Kokosowy </option>
                        <option value="czekoladowy"> Czekoladowy </option>
                        <option value="waniliowy"> Waniliowy </option>
                    </select>
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default FlaovorForm;