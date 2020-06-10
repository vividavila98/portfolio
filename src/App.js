import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import './styles/index.scss';
import Moneywise from './components/moneywise';

export default function App() {

    return (
      <div className='App'>
			<BrowserRouter basename='/'>
              <Switch>
                  <Route
                      path='/' exact
                      render={() => <HomePage />} 
                  />
                  <Route
                      path='/moneywise' exact
                      render={() => <Moneywise />} 
                  />
               </Switch>
          </BrowserRouter>
			</div>
    );
}
