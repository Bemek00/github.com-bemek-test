import React from 'react';
import './zdarzenia.css';

import Logowanie from './logowanie';
import EmailBox from './mail';
import Page from './ostrzezenie';


function ActionLink() {
    return(
        <a href="#" onClick={ActionLink}>
            Kliknij 
        </a>
    );

    function ActionLink(e){
        e.preventDefault();

        console.log('Kliknieto');
    }
}

class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {stan: false};
    }

    render(){
        return(
            <button onClick={this.klik}>
                {this.state.stan ? "Włączony" : "Wyłączony"}
            </button>
        );
    }

    klik = () => {
        this.setState(state => ({
            stan: !state.stan
        }));
    }
}

function Zdarzenia(){
    return(
        <div>
            <ActionLink />
            <hr />
            <Toggle />
            <hr />
            <Logowanie />
            <hr />
            <EmailBox nieprzeczytaneEmail={['patrry', 'ja']} />
            <hr />
            <Page />
        </div>
    );
}

export default Zdarzenia;