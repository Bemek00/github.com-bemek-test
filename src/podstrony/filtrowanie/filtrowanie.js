import React from 'react';
import './filtrowanie.css';

const userList = ["Patryk", "Ania", "Amadeusz", "Mateusz", "Patrycja", "Adrianna"];

const ListaUzytkownikow = (props) => {
  if(props.users.length > 0){
    return(
      <ul className="filtrowanie-ul"> 
        {props.users.map((user) => <li key={user}> {user} </li>)}
      </ul>
    );
  }
  else{
    return(
      <p className="filtrowanie-p"> Brak wyników </p>
    );
  }
}

class Filtrowanie extends React.Component{
    constructor(props){
        super(props);

        this.state = {filtrowaniUzytkownicy: userList};
    }

    render(){
        return(
            <div className="filtrowanie">
                <input type="text" className="filtrowanie-input" onInput={(e) => this.filtrowanie(e)} />
                <ListaUzytkownikow users={this.state.filtrowaniUzytkownicy} />
            </div>
        );
    }

    filtrowanie(e){
        const text = e.target.value;
        const filtrowaniUzytkownicy = this.filtrowaniUzytkownicyPrzezTekst(text);
                    
        this.setState({
        filtrowaniUzytkownicy
      });
    }

    filtrowaniUzytkownicyPrzezTekst(text){
        return userList.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
    }
}

export default Filtrowanie;