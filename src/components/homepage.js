import React from 'react';
import Navigation from './navigation';
import { Row, Col } from 'reactstrap';
import skills from '../images/skills.svg';
import '../styles/homepage.scss';
import resume from '../images/Viviana_Davila_Resume.pdf'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import line from '../images/line.svg';

export default function Homepage() {
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
              <p className='intro'>Hello! I’m a Front-End Web Developer based in San Diego, CA with an emphasis on utilizing ReactJS to build both simple mobile-responsive websites &amp; powerful, dynamic web applications. <br/> </p>
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
        {/* Projects Intro */}
        <section id='projects' className='container-fluid text-center'>
          <div className='container projects'>
            <h3><span className='code'>03. </span>My Projects <img src={line} className='line' /></h3>
            <h5 className='code'>// UI/UX Development &amp; JavaScript Development</h5>
            <Row>
              <Col md='12' lg='6' class='first-box'>
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
            <h5 className='code'>// If you're interested in disucssing my work, email me!</h5>
            <Row>
              <Col sm='6' md='3' className='box'>
                <h5 className='mb-0'><a href='mailto:vdavila@ucsd.edu'>Email <span className='pink'>&#8594;</span></a></h5>
                <p >get in touch with me</p>
              </Col>
              <Col sm='6' md='3' className='box'>
                <h5 className='mb-0'><a href={resume} target='_blank'>Resume <span className='pink'>&#8594;</span></a></h5>
                <p >learn about my work experience</p>
              </Col>
              <Col sm='6' md='3' className='box'>
                <h5 className='mb-0'><a href='https://github.com/vividavila98' target='_blank'>Github <span className='pink'>&#8594;</span></a></h5>
                <p>analyze my code</p>
              </Col>
              <Col sm='6' md='3'>
                <h5 className='mb-0'><a href='https://www.codecademy.com/profiles/vdavila98' target='_blank'>Codecademy <span className='pink'>&#8594;</span></a></h5>
                <p >see my progress</p>
              </Col>
            </Row>
          </div>
        </footer>
        <NavHashLink to='/#navigation'><p className='top mb-0 back'>&nbsp;Back to the top <span className='pink'>&#8593;</span></p></NavHashLink>
    </div>
    );
}

