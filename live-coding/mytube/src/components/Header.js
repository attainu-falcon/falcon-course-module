import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/loginActions';
import Login from './Login';

class Header extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <NavLink className="navbar-brand mb-0 h1" to="/">myTube</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {this.props.hideLogout ?
                "" :
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/search">Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/profile">Profile</NavLink>
                    </li>
                </ul>
                }
                {this.props.hideLogout ?
                    <Login /> :
                    <button className="btn btn-outline-light ml-auto" onClick={this.props.doLogout}>Logout</button>
                }
            </div>
            
        </nav>
    }
}

function mapActionToProps(dispatch) {
    return {
        doLogout: function() {
            localStorage.removeItem('user');
            dispatch(logoutUser());
        }
    }
}

export default connect(null, mapActionToProps)(Header);