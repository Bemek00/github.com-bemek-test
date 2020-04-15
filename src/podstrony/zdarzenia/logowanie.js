import React from 'react';

function UserGreeting(props){
    return(
        <h1> Witamy ponownie! </h1>
    );
}

function GuestGreeting(props){
    return(
        <h1> Proszę się zalogować! </h1>
    );
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Zaloguj się
        </button>
    );
}

function LogautButton(props){
    return(
        <button onClick={props.onClick}>
            Wyloguj się
        </button>
    );
}

function Greeting(props){
    const isLogin = props.isLogin;

    if(isLogin){
        return <UserGreeting />;
    }
    else{
        return <GuestGreeting />;
    }
}

class Logincontrol extends React.Component{
    constructor(props){
        super(props);

        this.state = {isLoggedIn: false};
    }

    handleLoginIn = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogautin = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogautButton onClick={this.handleLogautin} />
        }
        else{
            button = <LoginButton onClick={this.handleLoginIn} />
        }
        
        return(
            <div>
                <Greeting isLogin={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default Logincontrol;