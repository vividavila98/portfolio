import React from 'react';
import { 
    Row, Col 
  } from 'reactstrap';
import '../styles/footer.scss';
import resume from '../images/Viviana_Davila_Resume.pdf';
import line from '../images/line.svg';

export default function Footer() {
    return (
        <footer id='contact' className='container-fluid text-center'>
          <div className='container contact'>
            <h3><span className='code'>04.</span>Contact Me <img src={line} className='line' alt='line' /></h3>
            <h5 className='code mb-4'>{'//'} If you're interested in disucssing my work, email me!</h5>
            <Row>
              <Col sm='12' md='4'>
                <div className='box'>
                <h6 className='mb-0'><a href='mailto:vividavila98@gmail.com'>Email <span className='code'>&#8594;</span></a></h6>
                <p className='small'>get in touch with me</p>
                </div>
              </Col>
              <Col sm='12' md='4'>
                <div  className='box'>
                <h6 className='mb-0'><a href={resume} target='_blank' rel="noopener noreferrer">Resume <span className='code'>&#8594;</span></a></h6>
                <p className='small'>learn about my work experience</p>
                </div>
              </Col>
              <Col sm='12' md='4'>
                <div  className='box'>
                <h6 className='mb-0'><a href='https://github.com/vividavila98' target='_blank' rel="noopener noreferrer">Github <span className='code'>&#8594;</span></a></h6>
                <p className='small'>analyze my code</p>
                </div>
              </Col>
            </Row>
          </div>
        </footer>
    );
}
