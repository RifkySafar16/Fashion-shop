import React, { Component } from 'react';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import { NavLink, Redirect  } from 'react-router-dom';
import classes from './Products.css';
import axios from 'axios';

class Details extends Component {
	constructor(props){
    super(props);

    this.state = {
      products: [],
      id: this.props.product.id,
      title: this.props.product.title,
      category: this.props.product.category,
      body: this.props.product.body,
      date: null,
      dataProducts:null
    }
  }

  getProducts = () => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        this.setState({ products: response.data.data})
        console.log(this.state.products)
      })
      .catch(err => console.log(err))
  }

  renderProduct = () => {
    const list = this.props.product.map((product, id) => {
    	let splitProductName = product.name.toLowerCase().split(' ')
    	let joinProductName = splitProductName.join('-')
    	return <div className="col-lg-3 col-md-6 mt-5">
					<div className="card">
						<div className="card-body">
							<img src={process.env.PUBLIC_URL + "img/"+ joinProductName+ ".jpg"} alt="" className="img-fluid w-100 mb-3"/>
							<h3>{product.name}</h3>
							<div className="d-flex flex-row justify-content-center">                  
								<button className="btn btn-primary" type="submit" onClick={()=>this.props.history.push("/Login")}>Buy</button>
							</div>
						</div>
					</div>
				</div>
    	
    })
    return (list);
  }
  

  	renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Index' />
    }
  }
    componentDidMount () {
    	this.getProducts()
      console.log(this.props.product)
    }

    render () {
        return (
            <div>
               <section id="authors" className="my-5 text-center">
					<div className="container">
						<div className="row justify-content-center">
							
								<div className="col-8 mb-4 ">
									<h1 className=" pb-3">
									{this.props.nameCategory}
								</h1>
								<p className="lead pb-3">
									Our products made from fine cloth, presize cut, complete size and lovable design. We are also accept for any custom cut and design. 
								</p>
								</div>
							
						</div>
						<div className="row justify-content-center">
							{this.renderProduct()}
							
							
							
						</div>
					</div>
				</section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        nameCategory: state.nameCategory,
        product: state.product
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);