import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import Project from './components/project';
import './styles/index.scss';
import {cssaPdf} from './images/cssa.pdf';

const cssa = {
  num: '1',
  langs: 'HTML5 CSS3 Bootstrap',
  title: 'Cognitive Science Student Association.',
  date: 'May 19 - Present',
  role: 'UI Designer | Front-End Web Developer | Executive Board Member',
  overview: 'As the Web Developer for the Executive Board, I redesigned and developed the website for UC San Diego’s Cognitive Science Student Association. The previous website was not mobile responsive, and the co-presidents wanted a “cleaner” look. I focused on the design being minimal and professional, while also keeping the content friendly. I then used Bootstrap and CSS media queries to make the site mobile responsive. Since completing the overall redesign, my role now consists of genral maintenance.',
  visit:'https://cssa-ucsd.org/index.html',
  pdf: cssaPdf,
  class: 'cssa-class',
  button: 'Visit Site',
  link: 'https://cssa-ucsd.org/index.html'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: cssa
    };
  }

  // change project state
  changeProject = (projectName) => {
    this.setState({project: projectName});
  }

render() {
    return (
      <div className='App'>
			    <BrowserRouter>
              <Switch>
                  <Route
                      path='/' exact
                      render={() => <HomePage changeProject={this.changeProject}  project={this.state.project}/>} 
                  />
                  <Route 
                    path='/project' exact
                    render={() => <Project project={this.state.project}/>}
                  />
               </Switch>
          </BrowserRouter>
			</div>
    );
  }
}

export default App;
