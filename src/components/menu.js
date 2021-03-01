import React, { Component } from 'react';
import * as actionTypes from '../store/actions';
import { Redirect, Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';

class Menu extends Component {
	constructor(props){
		super(props)
		// this.handleLogOut = this.handleLogOut.bind(this);
		this.state = {
			isLogoutClick:this.props.session
		}
	}

    componentDidMount () {
    }

    handleLogOut = () =>{
    this.props.onLogOut(true);
  }

    showNav = () => {
    	if (this.props.session === true){
    		return <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
					    <div className="container">
					      <a href="index.html" className="navbar-brand">Blogen</a>
					      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
					        <span className="navbar-toggler-icon"></span>
					      </button>
					      <div className="collapse navbar-collapse" id="navbarNav">
						  </div>
					    </div>
				   </nav>
    	}
    	else if (this.props.session === false) {
    		return  <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
				    <div className="container">
				      <a href="/Index" className="navbar-brand">Blogen</a>
				      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
				        <span className="navbar-toggler-icon"></span>
				      </button>
				      <div className="collapse navbar-collapse" id="navbarNav">
				        <ul className="navbar-nav">
				          <li className="nav-item px-2">
				            <a href="/Index" className="nav-link active">Dashboard</a>
				          </li>
				          <li className="nav-item px-2">
				            <a href="/Posts" className="nav-link">Posts</a>
				          </li>
				          <li className="nav-item px-2">
				            <a href="/Categories" className="nav-link">Categories</a>
				          </li>
				          <li className="nav-item px-2">
				            <a href="/Users" className="nav-link">Users</a>
				          </li>
				        </ul>

				        <ul className="navbar-nav ml-auto">
				          <li className="nav-item dropdown mr-3">
				            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
				              <i className="fa fa-user"></i> Welcome Brad
				            </a>
				            <div className="dropdown-menu">
				              <a href="/Profile" className="dropdown-item">
				                <i className="fa fa-user-circle"></i> Profile
				              </a>
				              <a href="settings" className="dropdown-item">
				                <i className="fa fa-gear"></i> Settings
				              </a>
				            </div>
				          </li>
				          <li className="nav-item">
				            <a to='/login' className="nav-link" onClick={this.handleLogOut}>
				              <i className="fa fa-user-times"></i> Logout
				            </a>
				          </li>
				        </ul>
				      </div>
				    </div>
				  </nav>
    	}
    }

    

    render () {
        return (
            <div>
            	{this.showNav()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        session: state.sessions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch({type: actionTypes.LOG_OUT, payload: true})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);