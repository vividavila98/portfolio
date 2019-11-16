import React, {Component} from 'react';
import Navigation from './navigation';
import { Row, Col } from 'reactstrap';
import sqiuggle from '../images/squiggle.png'
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
              <div className='container-fluid title-box'>
                <h1 className='title text-center'>Viviana <br/>Davila</h1>
                {/*<h3 className='title-caption text-center'>Front-End Web Developer</h3>*/}
              </div>
              <Col className='header intro-box'>
                <p className='intro'>Hello! My name is Viviana Davila, and I’m <br/>a fourth-year undergraduate at UC <br/>San Diego studying Cognitive Science - <br/>Design and Interaction. <br/> <img src={sqiuggle} alt='squiggle'/></p>
              </Col>
            </Row>
          </header>
	   </div>
    );
  }
}

export default Homepage;
