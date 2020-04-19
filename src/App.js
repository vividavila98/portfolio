import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import './styles/index.scss';

export default function App() {

    return (
      <div className='App'>
			    <BrowserRouter>
              <Switch>
                  <Route
                      path='/' exact
                      render={() => <HomePage />} 
                  />
               </Switch>
          </BrowserRouter>
			</div>
    );
}
