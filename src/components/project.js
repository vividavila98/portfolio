import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/project.scss';
import home from '../images/home.png';
import { Link } from 'react-router-dom';

class Project extends Component {

  render() {
      console.log(this.props.project.class);
    return (
      <div className={this.props.project.class}>
         <div className='container-fluid'>
             <Row className='main-row'>
                 <Col className='slide' md='8'>
                 </Col>
                 <Col className='info' md='4'>
                   <span>
                    <Link to='/'><img src={home} width='30' height='30' /></Link>
                    &nbsp; 
                    &nbsp; 
                    {this.props.project.langs}
                    &nbsp;
                    {/*<span className='arrow'>&#8594;</span>*/}
                   </span>
                  <h1>{this.props.project.title}</h1>
                  <p className='date'>May '19 - Present</p>
                 </Col>
             </Row>
         </div>
	   </div>
    );
  }
}

export default Project;
