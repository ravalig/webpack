import React, { Component } from 'react';
import { Nav, NavItem, MenuItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class menu extends Component {

	render() {
		return (
			<Navbar className="sub-navbar">
		    <Nav >
		      <NavItem href="/asset_lookup">Asset Lookup</NavItem>
		      <NavItem href="/organizations">Organizations</NavItem>
		      <NavItem href="/products">Products</NavItem>
		      <NavItem href="/components">Components</NavItem>
		    </Nav>
		  </Navbar>
		);
	}
}

export default menu;