import React from 'react';

function toCelsius(fahranheit){
    return (fahranheit -32) * 5 / 9;
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);

    if(Number.isNaN(input)){
        return null;
    }

    const output = convert(input);
    return Math.round(output * 1000) / 1000;
}

function BolingVerdict(props){
    if (props.celsius >= 100)
        return <p> Woda będzie się gotować </p>;
    else
        return <p> Woda nie będzie się gotować </p>;
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
    }

    zmiana = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperatura = this.props.temperatura;
        const scale = this.props.scale;

        return(
            <fieldset>
                <legend> Podaj temperaturę w {scaleName[scale]}: </legend>
                <input type="number" value={temperatura} onChange={this.zmiana} />
            </fieldset>
        );
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {temperatura: null, scale: 'c'}
    }

    handleCelsiusChange = (temperatura) => {
        this.setState({
            scale: 'c',
            temperatura
        });
    }

    handleFahrenheitChange = (temperatura) => {
        this.setState({
            scale: 'f',
            temperatura
        });
    }

    render(){
        const scale = this.state.scale;
        const temperatura = this.state.temperatura;
        const celsis = scale === 'f' ? tryConvert(temperatura, toCelsius) : temperatura;
        const fahranheit = scale === 'c' ? tryConvert(temperatura, toFahrenheit) : temperatura;

        return(
            <div>
                <TemperatureInput 
                    scale="c" 
                    temperatura={celsis} 
                    onTemperatureChange = {this.handleCelsiusChange}
                />
                <TemperatureInput 
                    scale="f" 
                    temperatura={fahranheit} 
                    onTemperatureChange = {this.handleFahrenheitChange}
                />
                <BolingVerdict 
                    celsius={celsis}
                />
            </div>
        );
    }
}

const scaleName = {
    c: 'Celsjuszach',
    f: 'Fahrenheitach'
};

export default Home;