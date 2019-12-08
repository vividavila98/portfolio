import React, {Component} from 'react';
import '../styles/project.scss';
import { Row, Col } from 'reactstrap';

class Project extends Component {

  render() {
      console.log(this.props.project);
    return (
      <div className='project'>
         <div className='container-fluid'>
             <Row>
                 <Col className='slide' md='8'>

                 </Col>
                 <Col className='info' md='4'>
                    <p>{this.props.project.title}</p>
                 </Col>
             </Row>
         </div>
	   </div>
    );
  }
}

export default Project;
