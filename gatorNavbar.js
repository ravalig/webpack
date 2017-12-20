import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'react-bootstrap';

import Logo from '../../assets/Logo_White.svg';

export default class GatorNavbar extends Component {
	render() {
		return(
			<Navbar className="gatorNavbar">
				<Navbar.Header>
		      <Navbar.Brand>
		        <img className="gatorLogo" src={Logo} alt="Logo"/>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
        	<NavItem href="/" className="gatorLogo">GATOR LOGO</NavItem>
        </Nav>
		  </Navbar>
		);
	}
}