import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'react-bootstrap';


export default class GatorNavbar extends Component {
	render() {
		return(
			<Navbar className="gatorNavbar">
				<Navbar.Header>
		      <Navbar.Brand>
		        <img className="gatorLogo" src="" alt="Logo"/>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
        	<NavItem href="/" className="gatorLogo">GATOR LOGO</NavItem>
        </Nav>
		  </Navbar>
		);
	}
}