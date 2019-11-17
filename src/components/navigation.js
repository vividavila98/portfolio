import React, {Component} from 'react';
import '../styles/navigation.scss';
import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, 
    Nav, NavItem, Button
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggler = () => {
      this.setState({ isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className='navigation'>
          <Navbar expand='md'>
              <NavbarBrand href='/'><strong>Viviana</strong></NavbarBrand>
              <NavbarToggler onClick={this.toggler}><span className='menu'>&#61;</span></NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className='ml-auto' navbar>
                      <NavItem>
                          <NavHashLink to='/#top'>Home</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <NavHashLink to='/#about'>About</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <NavHashLink to='/#projects'>Projects</NavHashLink>
                      </NavItem>
                      <NavItem>
                          <Button className='contact-btn'><a href='mailto:vdavila@ucsd.edu'>Contact</a></Button>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
	   </div>
    );
  }
}

export default Navigation;
