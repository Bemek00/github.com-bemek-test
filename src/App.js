import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Nawigacja from './podstrony/nawigacja';
import Home from './podstrony/home/home';
import Filtrowanie from './podstrony/filtrowanie/filtrowanie';
import NotFound from './podstrony/notFound/notFound';

/*const userList = ["Patryk", "Ania", "Amadeusz", "Mateusz", "Patrycja", "Adrianna"];

const ListaUzytkownikow = (props) => {
  if(props.users.length > 0){
    return(
      <ul className="app-ul"> 
        {props.users.map((user) => <li key={user}> {user} </li>)}
      </ul>
    );
  }
  else{
    return(
      <p className="app-p"> Brak wyników </p>
    );
  }
}*/

class App extends React.Component{
  /*constructor(props){
    super(props);

    this.state = {filtrowaniUzytkownicy: userList};
  }

  render(){
    return(
      <div className="app">
        <input type="text" className="app-input" onInput={(e) => this.filtrowanie(e)} />
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
  }*/

  render(){
    return(
      <Router>
        <div>
          <Nawigacja />
          <Switch>
            <Route path="/test/filtrowanie">
              <Filtrowanie />
            </Route>
            <Route path="/test/" exact>
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
