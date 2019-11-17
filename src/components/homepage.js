import React, {Component} from 'react';
import Navigation from './navigation';
import { Row, Col } from 'reactstrap';
import sqiuggle from '../images/squiggle.png'
import venn from '../images/venn.png'
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
                <h1 className='title text-center'>
                  Viviana <br/>Davila<br/>
                  <span><h3 className='title-caption text-center'>Front-End Web Developer</h3></span><br/></h1>
              </div>
              <Col className='header intro-box'>
                <p className='intro'>Hello! My name is Viviana Davila, and I’m a fourth-year undergraduate at UC San Diego studying Cognitive Science - Design and Interaction. <br/> <img src={sqiuggle} alt='squiggle'/></p>
              </Col>
            </Row>
          </header>
          {/* About Me */}
          <section className='container-fluid about-container'>
            <div className='container'>
              <Row>
                <Col sm='12' md='6' className='about-col'>
                  <img src={sqiuggle} className='squiggle' alt='squiggle'/>
                  <h2 className='about-text'>About <br/>Me<span className='about-period'>.</span></h2>
                </Col>
                <Col sm='12' md='6' className='text-center'>
                  <img src={venn} className='venn img-fluid' alt='venn'/>
                  <p className='text-left'>
                  I believe that having an education is a privilege that I should use to help the community around me. Because of this, I aspire to use my skills in Front-End Web Development and UX/UI Design to take part in meaningful projects that are aimed towards making social impact.
                  </p>
                </Col>
              </Row>
            </div>
          </section>
          {/* Skills */}
          <section className='container'>
            <Col><h3>An</h3></Col>
            <Col></Col>
          </section>
	   </div>
    );
  }
}

export default Homepage;
