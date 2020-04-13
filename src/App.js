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
          <Route>
            <PodzialStrony tresc={<NotFound />} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
