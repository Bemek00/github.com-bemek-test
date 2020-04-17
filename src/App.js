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
import PodzialStrony from './podstrony/podzialStron/podzialstron';
import Zdarzenia from './podstrony/zdarzenia/zdarzenia';
import NumberList from './podstrony/klucze/klucze';
import Form from './podstrony/formularze/formularze';

function App(){
  return(
    <Router>
      <div>
        <Nawigacja />
        <Switch>
          <Route path="/test/" exact>
            <PodzialStrony tresc={<Home />} />
          </Route>
          <Route path="/test/filtrowanie">
            <PodzialStrony tresc={<Filtrowanie />} />
          </Route>
          <Route path="/test/zdarzenia">
            <PodzialStrony tresc={<Zdarzenia />} />
          </Route>
          <Route path="/test/klucze">
            <PodzialStrony tresc={<NumberList />} />  
          </Route>
          <Route path="/test/formularze">
            <PodzialStrony tresc={<Form />} />
          </Route>          
          <Route>
            <PodzialStrony tresc={<NotFound />} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
