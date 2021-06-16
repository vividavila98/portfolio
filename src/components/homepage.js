import React, {useState} from 'react';
import Navigation from './navigation';
import { 
  Row, Col, Nav, NavItem, NavLink, TabContent, TabPane 
} from 'reactstrap';
import classnames from 'classnames';
import skills from '../images/skills.png';
//import github from '../images/git.png';
//import link from '../images/link.png';
import '../styles/homepage.scss';
import { NavHashLink } from 'react-router-hash-link';
import line from '../images/line.svg';
import Footer from './footer';

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
              <p className='intro'>Hello! I’m a Front-End Web Developer based in Los Angeles, CA with an emphasis on utilizing <span className="code">ReactJS</span> to build both simple mobile-responsive websites &amp; dynamic web applications. <br/> </p>
            </Col>
          </Row>
        </header>
        {/* About Me */}
        <section id='about' className='container-fluid'>
          <div className='container about'>
            <Row>
            <Col md='12' lg='6'>
                <h3><span className='code'>01. </span>About Me <img src={line} className='line' alt='line'/></h3>
                <h5 className='code'>{'//'} More about me as a Web Developer</h5>
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
            <h3 className='text-center'><span className='code'>02. </span>Professional Experience <img src={line} className='line' alt='line'/></h3>
            <h5 className='code text-center'>{'//'} My work involving Web Development, Design, and Education</h5>
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
                    GrowthMed Job
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: activeTab === '2'})}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Wistly Internship
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: activeTab === '3'})}
                    onClick={() => {
                      toggle('3');
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
                  <h5>Front-End Developer<span className='code-color'> @ GrowthMed</span></h5>
                  <p className = 'date'> August 2020 - Present </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Work closely with the Design team to implement Photoshop mockups into modern and high-quality websites using WordPress, HTML, and CSS to represent our clients' businesses.
                  </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Examples of my work include creating websites for various doctors such as a <a href="https://www.drnaarpremiervein.com/" target="_blank" rel="noopener noreferrer" className='code'>Vascular Surgeon</a>, 
                    a <a href="https://shinecosmeticsurgery.com/" target="_blank" rel="noopener noreferrer" className='code'>Cosmetic Surgeon</a>, 
                    and a team of <a href="https://www.austincosmeticsurgery.com/" target="blank" rel="noopener noreferrer" className='code'>Cosmetic Surgeons</a>. 
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <h5>Front-End Developer Intern <span className='code-color'>@ Wistly</span></h5>
                  <p className = 'date'>February 2020 - October 2020</p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Collaborated in a cross-functional team of passionate designers and developers to begin the development 
                    of a <a href="https://wistly.io/" target="_blank" rel="noopener noreferrer" className="code">delivery service mobile application</a> using React Native, 
                    TypeScript, and Redux. 
                  </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Utilized the Google Places API with Redux to enable users to view their current location when making a delivery 
                    request; acknowledged during my code review for my use of Redux making the location state traceable and
                    maintainable in the codebase.
                    </p>
                </TabPane>
                <TabPane tabId="3">
                  <h5>Front-End Developer Intern <span className='code-color'>@ Juristerra</span></h5>
                  <p className = 'date'>June 2019 - August 2019</p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Converted the <a href="https://www.medpius.com/" target="_blank" rel="noopener noreferrer" className="code">Medpius</a> web platform from HTML and CSS to ReactJS, Reactstrap, and SCSS
                  </p>
                  <p className='info'>
                    <span className='code-color asterik'>*</span>
                    Assisted the lead developer on refactoring the code for the <a href="https://www.juristerra.net/" target="_blank" rel="noopener noreferrer" className="code">Juristerra</a> web platform 
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
            <h3><span className='code'>03. </span>My Projects <img src={line} className='line' alt='line'/></h3>
            <h5 className='code'>{'//'} UI/UX Development &amp; JavaScript Development</h5>
            <Row>
           { /*<Col md='12' lg='4'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <a href='https://github.com/vividavila98/Login-Practice'><h5>Money Wise</h5></a>
                  <p className='info'>
                    A tool to track your spending habits and offer insights on how to budget.
                  </p>
                  <p className='tech'> JavaScript ReactJS ExpressJS</p>
                </div>
                  </Col>*/}
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <a href='https://www.lill.link/' target='_blank' rel="noopener noreferrer"><h5>Shortly</h5></a>
                  <p className='info'>
                    A tool to shorten your link, as apart of a mock website designed by FrontEnd Mentor. 
                  </p>
                  <p className='tech'>TypeScript &nbsp;&nbsp; NodeJS &nbsp;&nbsp; ExpressJS &nbsp;&nbsp; MongoDB &nbsp;&nbsp; ReactJS &nbsp;&nbsp; Redux &nbsp;&nbsp; Axios</p>
                </div>
              </Col>
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <a href='https://www.ravenous.me/' target='_blank' rel="noopener noreferrer"><h5>Ravenous</h5></a>
                  <p className='info'>
                    A tool to search for businesses to recieve information on it's address, ratings, and number of reviews. 
                  </p>
                  <p className='tech'>JavaScript &nbsp;&nbsp; ReactJS &nbsp;&nbsp; Yelp API &nbsp;&nbsp; Axios</p>
                </div>
              </Col>
            </Row>
            <Row>
          {/* <Col md='12' lg='6'>
            <div className='outline'></div>
              <div className='box'>
                <h6 className='code'>Website</h6>
                <a href='https://cssa-ucsd.org/2019-2020/index.html' target='_blank' rel="noopener noreferrer"
                ><h5>CSSA</h5></a>
                <p className='info'>
                  A resource on how 
                  students can get involved in the Cognitive 
                  Science community. 
                </p>
                <p className='tech'>HTML &nbsp;&nbsp; CSS3 &nbsp;&nbsp; Bootstrap</p>
              </div>
            </Col> */}
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <a href='https://fervent-villani-5078b3.netlify.app/' target='_blank' rel="noopener noreferrer"
                  ><h5>IP Tracker</h5></a>
                  <p className='info'>
                    A tool to find location details based on either your current or inputted IP address.
                  </p>
                  <p className='tech'>TypeScript &nbsp;&nbsp; ReactJS &nbsp;&nbsp; IP Geolocation API &nbsp;&nbsp; LeafletJS</p>
                </div>
              </Col>
              <Col md='12' lg='6'>
              <div className='outline'></div>
                <div className='box'>
                  <h6 className='code'>Web Application</h6>
                  <a href='https://dazzling-galileo-94f8eb.netlify.app/' target='_blank' rel="noopener noreferrer"
                  ><h5>Where in the World?</h5></a>
                  <p className='info'>
                    A resource for basic information on any country in the world, as apart of challenge on Frontend Mentor. 
                  </p>
                  <p className='tech'>TypeScript &nbsp;&nbsp; ReactJS &nbsp;&nbsp; Countries API &nbsp;&nbsp; SCSS</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/* Footer */ }
        <Footer />
        <NavHashLink to='/#navigation'><p className='top mb-0 back'>&nbsp;Back to the top <span className='code'>&#8593;</span></p></NavHashLink>
    </div>
    );
}

