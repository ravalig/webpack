import _ from 'lodash';

import React, { Component } from 'react';
import { PageHeader, Panel, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { Breadcrumb } from 'react-bootstrap';

import { fetchProductDetail } from '../../actions/index';

class ProductDetail extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchProductDetail(id);
	}

	renderProductInfo(){
		return(
			<div>
				<div className="organization-info white-blue">
					<h4>PRODUCT INFO</h4>
					<Link to={"/organizations/"+this.props.product.orgId+"/products/edit/"+this.props.product.id}>
						<span><i className="fa fa-pencil white-blue" aria-hidden="true"></i></span>
					</Link>
				</div>

				<table>
					<tbody>
						<tr>
							<td>Name:</td>
							<td>{this.props.product.name}</td>
						</tr>
						<tr>
							<td>Abbreviation:</td>
							<td>{this.props.product.abbreviation}</td>
						</tr>
						<tr>
							<td>Organization Name:</td>
							<td>{this.props.product.orgName}</td>
						</tr>
					</tbody>
				</table>
				<hr />
			</div>
		);
	}

	renderProduct() {
        return(
			<Col md={12}>
				<Row>
					<Col mdOffset={2} md={4}>
						<Breadcrumb className = "breadcrumb">
							<Breadcrumb.Item href="/products">
								Products
							</Breadcrumb.Item>
							<Breadcrumb.Item active >
                                {this.props.product.name}
							</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<PageHeader className="text-center white-blue"> {this.props.product.name} </PageHeader>

				<Row>
					<Col mdOffset={2} md={4}>
						<Row>
							<Col>
                                {this.renderProductInfo()}
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
        );
	}

	render() {
        if(this.props.error) {
            return(
				<div>
                    {this.props.error.toString()}
				</div>
            );
        }
        else if(this.props.loading) {
            return(
				<div className="loader">
				</div>
            );
        }
        else {
            let product = null;
            if(_.size(this.props.product) > 0){
                product = <div className="panelContainer">
                    {this.renderProduct()}
				</div>;
            } else {
                product = <div> There is no product with the given Id </div>;
            }

            return(
				<div>{product}</div>
            );
        }
	}
}

const mapStateToProps = ({ fetchProductDetailSuccess, fetchProductDetailHasErrored, fetchProductDetailIsLoading }, ownProps) => ({
		product:fetchProductDetailSuccess,
    	error: fetchProductDetailHasErrored,
    	loading: fetchProductDetailIsLoading
});

export default connect(mapStateToProps, { fetchProductDetail })(ProductDetail);



