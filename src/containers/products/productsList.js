import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

import { fetchProductsList } from '../../actions/index';

class ProductsList extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.fetchProductsList();
	}

	renderProducts() {
		return _.map(this.props.products, product => {
      		return (
        		<Col md={2} key={product.id}>
					<Panel className="tiles">
						<Link to={"/products/"+product.id}>
							<h4>{product.name}</h4>
						</Link>
					</Panel>
				</Col>
      		);
    	});
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
            let products = null;
            if (_.size(this.props.products) > 0) {
                products = <div className="panelContainer">
                    {this.renderProducts()}
				</div>;
            } else {
                products = <div>There are no products to display </div>;
            }

            return (
				<Col md={12}>
					<Row>
						<Col md={3}>
							<h2 className="white-blue">Products</h2>
						</Col>
					</Row>
					<hr />
                    {products}
				</Col>
            );
        }
	}
}

const mapStateToProps = ({ fetchProductsListSuccess, fetchProductsListHasErrored, fetchProductsListIsLoading }) => ({
    products:fetchProductsListSuccess,
    error: fetchProductsListHasErrored,
    loading: fetchProductsListIsLoading
});


export default connect(mapStateToProps, { fetchProductsList })(ProductsList);