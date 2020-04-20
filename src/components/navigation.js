import React, {useState} from 'react';
import '../styles/navigation.scss';
import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, 
    Nav, NavItem, Button
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import menu from '../images/menu.svg';
import resume from '../images/Viviana_Davila_Resume.pdf';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggler = () => {
      setIsOpen(!isOpen);
  }

    return (
      <div className='navigation' id='navigation'>
          <Navbar expand='md'>
              <NavbarBrand href='/'><strong className='code'>V</strong></NavbarBrand>
    <NavbarToggler onClick={toggler}><span className='menu'><img src={menu} /></span></NavbarToggler>
              <Collapse isOpen={isOpen} navbar>
                  <Nav className='ml-auto' navbar>
                      <NavItem>
                          <NavHashLink to='/#about'><span className='code'>01. </span>About</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <NavHashLink to='/#experience'><span className='code'>02. </span>Experience</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <NavHashLink to='/#projects'><span className='code'>03. </span>Projects</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <NavHashLink to='/#contact'><span className='code'>04. </span>Contact</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <Button className='contact-btn'><a href={resume} target='_blank'>Resume</a></Button>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
	   </div>
    );
}
