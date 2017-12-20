import React, { Component } from 'react';
import { Nav, NavItem, MenuItem, Navbar } from 'react-bootstrap';

class menu extends Component {

	render() {
		return (
			<Navbar className="sub-navbar">
		    <Nav >
		      <NavItem href="/asset_lookup">Asset Lookup</NavItem>
		      <NavItem href="/products">Products</NavItem>
		    </Nav>
		  </Navbar>
		);
	}
}

export default menu;