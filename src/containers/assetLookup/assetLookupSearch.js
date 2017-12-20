import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";

import { fetchAssetLookup } from "../../actions/index";


class AssetLookupSearch extends Component {

	constructor(props) {
		super(props);

		this.state = { searchTerm: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
    	this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchAssetLookup(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

	render() {
		return(
			<Col mdOffset={1} md={5}>
				<Row>
					<form onSubmit={this.onFormSubmit} className="input-group">
		        <input
		          placeholder="Enter asset name"
		          className="form-control"
		          value={this.state.searchTerm}
		          onChange={this.onInputChange}
		        />
			      <span className="input-group-btn">
			        <button type="submit" className="btn blue-white">Search</button>
			      </span>
		      </form>
	      </Row>
	    </Col>
		);
	}
}


export default reduxForm({
  form: "AssetSearchForm"
})(connect(null, { fetchAssetLookup })(AssetLookupSearch));






