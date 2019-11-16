import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import './styles/index.scss';

class App extends Component {

render() {
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
}

export default App;
