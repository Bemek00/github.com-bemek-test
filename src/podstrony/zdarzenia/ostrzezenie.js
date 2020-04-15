import React from 'react';

function Ostrzezenie(props){
    if(props.pokaz){
        return null;
    }

    return(
        <h3> Ostrzeżenie </h3> 
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);

        this.state = {toggle: false};
    }

    render(){
        return(
            <div>
                <Ostrzezenie pokaz={this.state.toggle} />
                <button onClick={this.zmiana}>
                    {this.state.toggle ? 'Włącz' : 'Wyłącz'}
                </button>
            </div>
        );
    }

    zmiana = () => {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }
}

export default Page;