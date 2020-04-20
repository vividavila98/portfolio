import React, {useState} from 'react';
import Navigation from './navigation';
import { 
  Row, Col, Nav, NavItem, NavLink, TabContent, TabPane 
} from 'reactstrap';
import classnames from 'classnames';
import skills from '../images/skills.png';
import '../styles/homepage.scss';
import resume from '../images/Viviana_Davila_Resume.pdf'
import { NavHashLink } from 'react-router-hash-link';
import line from '../images/line.svg';

export default function Homepage() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if(activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <div className='homepage'>
      <Navigation />
        {/* header */}
        <header id='top' className='container-fluid'>
          <Row>
            <Col className='header web-background'></Col>
            <div className='container-fluid title-box'>
              <h1 className='title text-center'>
                Viviana <br/>Davila<br/>
                <span><h3 className='title-caption text-center code'>Front-End Web Developer</h3></span><br/></h1>
            </div>
            <Col className='header intro-box'>
              <p className='intro'>Hello! I’m a Front-End Web Developer based in San Diego, CA with an emphasis on utilizing ReactJS to build both simple mobile-responsive websites &amp; dynamic web applications. <br/> </p>
            </Col>
          </Row>
        </header>
        {/* About Me */}
        <section id='about' className='container-fluid'>
          <div className='container about'>
            <Row>
            <Col md='12' lg='6'>
                <h3><span className='code'>01. </span>About Me <img src={line} className='line' /></h3>
                <h5 className='code'>// More about me as a Web Developer</h5>
                <img src={skills} className='skills img-fluid' alt='skills'/>
              </Col>
              <Col md='12' lg='6' className='about-col'>
                <p className='about-text'>
                With my education of UI/UX Design from UC San Diego, I branched off to learn 
                Front-End Web Development on my own. I began with developing my skills as a UI/UX 
                Developer by learning <span className='code'>HTML</span>, <span className='code'>CSS</span>, &amp;  
                <span className='code'> Boostrap</span> to build mobile-responsive websites. 
                I then began developing my skills as a JavaScript Developer by learning <span className='code'>ReactJS</span>. Now, 
                I’m building powerful and dynamic web applications, while learning new technologies on the way. 
                I love that I will never stop being a student!
                </p>
              </Col>
            </Row>
          </div>
        </section>
        {/* Experience*/} 
        <section id='experience' className='container-fluid'>
          <div className='container experience'>
            <h3 className='text-center'><span className='code'>02. </span>Professional Experience <img src={line} className='line' /></h3>
            <h5 className='code text-center'>// My work involving Web Development, Design, and Education</h5>
            <div className='tabs text-center'>
            <Row>
            <Col xs="12" sm="12" md="4">
              <Nav vertical>
                <NavItem>
                  <NavLink
                    className={classnames({active: activeTab === '1'})}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    Wistly Internship
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: activeTab === '2'})}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Juristerra Internship
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="12" sm="12" md="6">
              <TabContent className='text-left' activeTab={activeTab}>
                <TabPane tabId="1">
                  <h5>Front-End Developer Intern <span className='code-color'>@ Wistly</span></h5>
                  <p className = 'date'>February 2020 - Present</p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Developing the Front-End side of a React Native application in collaboration with another intern
                  </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                      Integrated Google Maps using an npm package in order to show the user's current location
                    </p>
                </TabPane>
                <TabPane tabId="2">
                  <h5>Front-End Developer Intern <span className='code-color'>@ Juristerra</span></h5>
                  <p className = 'date'>June 2019 - August 2019</p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Converted the Medpius web platform from HTML and CSS to ReactJS, Reactstrap, and SCSS
                  </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Assisted the lead developer on refactoring the code for the Juristerra web platform 
                    </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          </div>
          </div>
        </section>
        {/* Projects Intro */}
        <section id='projects' className='container-fluid text-center'>
          <div className='container projects text-center'>
            <h3><span className='code'>03. </span>My Projects <img src={line} className='line' /></h3>
            <h5 className='code'>// UI/UX Development &amp; JavaScript Development</h5>
            <Row>
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Club Website</h6>
                  <h5>Cognitive Science Student Assoc.</h5>
                  <p className='info'>
                    A resource on how 
                    students can get involved in the Cognitive 
                    Science community. 
                  </p>
                  <p className='tech'>HTML CSS3 Bootstrap</p>
                </div>
              </Col>
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <h5>Ravenous</h5>
                  <p className='info'>
                    A tool to search for businesses matching your inputted criteria.
                  </p>
                  <p className='tech'>JavaScript ReactJS Axios</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/* Footer */ }
        <footer id='contact' className='container-fluid text-center'>
          <div className='container contact'>
            <h3><span className='code'>04. </span>Contact Me <img src={line} className='line' /></h3>
            <h5 className='code mb-4'>// If you're interested in disucssing my work, email me!</h5>
            <Row>
              <Col sm='6' md='3'>
                <div className='box'>
                <h6 className='mb-0'><a href='mailto:vdavila@ucsd.edu'>Email <span className='code'>&#8594;</span></a></h6>
                <p className='small'>get in touch with me</p>
                </div>
              </Col>
              <Col sm='6' md='3'>
                <div  className='box'>
                <h6 className='mb-0'><a href={resume} target='_blank'>Resume <span className='code'>&#8594;</span></a></h6>
                <p className='small'>learn about my work experience</p>
                </div>
              </Col>
              <Col sm='6' md='3'>
                <div  className='box'>
                <h6 className='mb-0'><a href='https://github.com/vividavila98' target='_blank'>Github <span className='code'>&#8594;</span></a></h6>
                <p className='small'>analyze my code</p>
                </div>
              </Col>
              <Col sm='6' md='3'>
                <div  className='box'>
                <h6 className='mb-0'><a href='https://www.codecademy.com/profiles/vdavila98' target='_blank'>Codecademy <span className='code'>&#8594;</span></a></h6>
                <p className='small'>see my progress</p>
                </div>
              </Col>
            </Row>
          </div>
        </footer>
        <NavHashLink to='/#navigation'><p className='top mb-0 back'>&nbsp;Back to the top <span className='code'>&#8593;</span></p></NavHashLink>
    </div>
    );
}

