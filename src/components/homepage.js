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
                  <h2 className='about-text'><img src={sqiuggle} className='squiggle' alt='squiggle'/><br/>About <br/>Me<span className='about-period'>.</span></h2>
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
          <section className='container-fluid skills-container'>
            <div className='container'>
            <Row>
              <Col md='12' lg='6'>
              <h3 className='skills-text'><span className='bold'>An overview of my </span>technical skills<span className='skills-period'>.</span></h3>
                <p className='skills-intro mt-4'> I am currently shifting towards becoming more of a JavaScript developer, rather than a UI/UX one, by learning ReactJS. I then plan on shifting towards becoming a Fullstack Developer in the future. </p>
              </Col>
              <Col md='12' lg='6' className='skills-list'>
                <Row>
                  <Col sm='12' md='4'>
                    <ul>
                      <li><img src={sqiuggle} alt='squiggle'/></li>
                      <li className='bold'>Languages</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                    </ul>
                  </Col>
                  <Col sm='12' md='4'>
                    <ul>
                      <li><img src={sqiuggle} alt='squiggle'/></li>
                      <li className='bold'>Libraries &amp; Frameworks</li>
                      <li>ReactJS</li>
                      <li>Bootstrap</li>
                      <li>Reactstrap</li>
                      <li>jQuery</li>
                    </ul>
                  </Col>
                  <Col sm='12' md='4'>
                    <ul>
                      <li><img src={sqiuggle} alt='squiggle'/></li>
                      <li className='bold'>Tools</li>
                      <li>npm</li>
                      <li>Git</li>
                      <li>Github</li>
                      <li>Bitbucket</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            </div>
          </section>
          {/* Projects Intro */}
          <div className='container-fluid'>
            <div className='container'>
              <Row>
                <Col sm='12' md='6'>
                  <h2 className='work-text'><img src={sqiuggle} className='squiggle' alt='squiggle'/><br/>My Work<span className='about-period'>.</span></h2>
                </Col>
                <Col  sm='12' md='6' className='selection'>
                  <h3 className='selection-text'><span className='bold'>A selection of </span>four projects <span className='bold'>I'm most proud of</span><span className='black-period'>.</span></h3>
                </Col>
              </Row>
            </div>
          </div>
          {/* First Project Row */}
          <div className='container-fluid mt-2'>
            <Row>
              <Col className='medpius'>
                <div className='container'>
                  <p>Web Platform</p>
                  <h5 className='name'>Medpius.</h5>
                  <h5 className='info'>Connecting Japenese patients to American Doctors</h5>
                </div>
              </Col>
              <Col className='cssa'>
              <div className='container'>
                  <p>Club Website</p>
                  <h5 className='name'>Cognitive Science Student Association.</h5>
                  <h5 className='info'>Representing one of the biggest departments at UC San Diego</h5>
                </div>
              </Col>
            </Row>
          </div>
           {/* Second Project Row */}
           <div className='container-fluid project-container'>
            <Row>
              <Col className='jamming'>
                <div className='container'>
                  <p>Web Application</p>
                  <h5 className='name'>Jamming.</h5>
                  <h5 className='info'>Searching for music using the Spotify API</h5>
                </div>
              </Col>
              <Col className='ravenous'>
              <div className='container'>
                  <p>Web Application</p>
                  <h5 className='name'>Ravenous.</h5>
                  <h5 className='info'>Searching for restaurants using the Yelp API</h5>
                </div>
              </Col>
            </Row>
          </div>
          {/* Footer */ }
          <footer className='container-fluid '>
            <h5 className='text-center pink'>Thanks for reading! Here's more about me...</h5>
            <div className='container mt-4'>
              <Row>
                <Col sm='6' md='3' className='box'>
                  <h5 className='mb-0'>Email <span className='pink'>&#8594;</span></h5>
                  <p >get in touch with me</p>
                </Col>
                <Col sm='6' md='3' className='box'>
                  <h5 className='mb-0'>Resume <span className='pink'>&#8594;</span></h5>
                  <p >learn about my work experience</p>
                </Col>
                <Col sm='6' md='3' className='box'>
                  <h5 className='mb-0'>Github <span className='pink'>&#8594;</span></h5>
                  <p>analyze my code</p>
                </Col>
                <Col sm='6' md='3'>
                  <h5 className='mb-0'>Codecademy <span className='pink'>&#8594;</span></h5>
                  <p >see my progress</p>
                </Col>
              </Row>
            </div>
          </footer>
	   </div>
    );
  }
}

export default Homepage;
