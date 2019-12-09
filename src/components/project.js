import React, {Component} from 'react';
import { Row, Col, Button } from 'reactstrap';
import '../styles/project.scss';
import home from '../images/home.png';
import { Link } from 'react-router-dom';
import cssaPdf from '../images/cssa.pdf';

const cssa = {
  num: '1',
  langs: 'HTML5 CSS3 Bootstrap',
  title: 'Cognitive Science Student Association.',
  date: 'May 19 - Present',
  role: 'UI Designer | Front-End Web Developer | Executive Board member',
  overview: 'As the Web Developer for the Executive Board, I redesigned and developed the website for UC San Diego’s Cognitive Science Student Association. The previous website was not mobile responsive, and the co-presidents wanted a “cleaner” look. I focused on the design being minimal and professional, while also keeping the content friendly. I then used Bootstrap and CSS media queries to make the site mobile responsive. Since the overall redesign, my role now consists of genral maintenance.',
  visit:'https://cssa-ucsd.org/index.html',
  class: 'cssa-class',
  button: 'Visit Site',
  link: 'https://cssa-ucsd.org/index.html'
};

const medpius = {
  num: '2',
  langs: 'ReactJS ReactStrap SCSS',
  title: 'Medpius.',
  date: 'June 19 - August 19',
  role: '',
  overview: 'As the Web Developer for the Executive Board, I redesigned and developed the website for UC San Diego’s Cognitive Science Student Association. The previous website was not mobile responsive, and the co-presidents wanted a “cleaner” look. I focused on the design being minimal and professional, while also keeping the content friendly. I then used Bootstrap and CSS media queries to make the site mobile responsive. Since the overall redesign, my role now consists of genral maintenance.',
  visit:'https://cssa-ucsd.org/index.html',
  pdf: '',
  class: 'medpius-class',
  button: 'Visit Site'
};

class Project extends Component {

  
  render() {
      console.log(this.props.project.pdf);
    return (
      <div className={this.props.project.class}>
         <div className='container-fluid'>
             <Row className='main-row'>
                 <Col className='slide' md='8'>
                   {this.choosePdf}
                 </Col>
                 <Col className='info' md='4'>
                   <span className='lang'>
                    <Link to='/'><img src={home} width='50' height='50' /></Link>
                    &nbsp; 
                    &nbsp; 
                    {this.props.project.langs}
                    &nbsp;
                    {/*<span className='arrow'>&#8594;</span>*/}
                   </span>
                  <h1>{this.props.project.title}</h1>
                  <p className='date'>May '19 - Present</p>
                  <h2>Role</h2>
                  <p className='role'>{this.props.project.role}</p>
                  <h2>Overview</h2>
                  <p className='overview'>{this.props.project.overview}</p>
                  <Button><a href={this.props.project.link} target='_blank'>{this.props.project.button}</a></Button>
                 </Col>
             </Row>
         </div>
	   </div>
    );
  }
}

export default Project;
