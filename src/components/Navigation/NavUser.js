import React from 'react';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

const navUser = ( props ) => (
	<div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <NavLink to="/Index" exact className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink to="/Posts" className="nav-link">Posts</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink to="/Categories" className="nav-link">Categories</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink to="/Users" className="nav-link">Users</NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown mr-3">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user"></i> Welcome Brad
            </a>
            <div className="dropdown-menu">
              <NavLink to="/Profile" className="dropdown-item">
                <i className="fa fa-user-circle"></i> Profile
              </NavLink>
              <NavLink to="settings" className="dropdown-item">
                <i className="fa fa-gear"></i> Settings
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to='/login' className="nav-link" onClick={props.onLogOut}>
              <i className="fa fa-user-times"></i> Logout
            </NavLink>
          </li>
        </ul>
      </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(navUser);