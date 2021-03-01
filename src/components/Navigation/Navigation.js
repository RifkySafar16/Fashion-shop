import React, { Component } from 'react';

import NavUser from './NavUser';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import fashioLogo from './fashion-logo.png';
import { NavLink } from 'react-router-dom';

import axios from 'axios';



class navigation extends Component {
    state = {
        products:[],
        category:[],
        showSideDrawer: false
    }

    componentDidMount(){
    this.getProducts()
    this.getCategory()

  }

    getProducts = _ => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        this.setState({ products: response.data.data})
        console.log(this.state.products)
      })
      .catch(err => console.log(err))
  }

     getCategory = _ => {
    axios.get('http://localhost:4000/category')
      .then(response => {
        this.setState({ category: response.data.data})
      })
      .catch(err => console.log(err))
  }
   renderDropdown = () => {
    const list = this.state.category.map((category, id) => {
        return <NavLink to="/products" className="dropdown-item bg-light text-dark" key={category.id} onClick={() => this.handleDropdown(category.id,category.name)}>{category.name}</NavLink>
        
    })
    return (list);
  }

    handleDropdown = (id, name) => {
        let dataProductClick = {
            product: {
                    id:null,
                    category_id:null,
                    store_id:null,
                    name:null,
                    price:null,
                    description:null,
                    image:null,
                    active:null
                }
        }
        dataProductClick = this.state.products.filter( n => n.category_id[2] == id)
        this.props.onDropdownClick(dataProductClick, name);
    }
    showNavUser = () => {
    	if (this.props.session == true){
    		return false
    	} else return <NavUser/>
    }
    render () {
        return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-3">
                    <div className="container">
                    <a href="index.html" className="navbar-brand">
                        <img src={fashioLogo} width="40" height="40" alt="" className="pt-1"/><h3 className="d-inline align-middle"> &nbsp;Fashion Store</h3>
                    </a>
                    <button className="navbar-toggler" data-toggle='collapse' data-target='#navbarNav'><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">    
                               <NavLink to="/Home" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">   
                                <a className="nav-link dropdown-toggle" href="#"
                                  data-toggle='dropdown'>Products</a>
                                  <div className="dropdown-menu">
                                    {this.renderDropdown()}
                                  </div> 
                            </li>
                            <li className="nav-item">    
                               <NavLink to="/Login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">    
                               <NavLink to="/About" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        session: state.sessions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDropdownClick: (data, name) => dispatch({type: actionTypes.STORING_DROPDOWNCLICK, payload1: data, payload2:name})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navigation);

