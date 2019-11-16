import React, {Component} from 'react';
import Navigation from './navigation';
import { Row, Col } from 'reactstrap';
import '../styles/homepage.scss';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='homepage'>
          <Navigation />
          {/* header */}
          <header className='container-fluid'>
            <Row>
              <Col className='header web-background'></Col>
              <h1 className='title'>Viviana <br/>Davila</h1>
              <Col className='header'></Col>
            </Row>
          </header>
	   </div>
    );
  }
}

export default Homepage;
