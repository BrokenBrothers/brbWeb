import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth'

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul>
                <strong>{user ? `welcome: ${user.username}` : ""}</strong>
                <li>
                    <button onClick={this.props.logout} >Logout</button>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>


            </ul>
        );
        return (

            <nav>
                {isAuthenticated ? authLinks : guestLinks}
            </nav>

        )
    }
}
const mapStateProps = state => ({
    auth: state.auth
});
export default connect(mapStateProps, { logout })(Header);
