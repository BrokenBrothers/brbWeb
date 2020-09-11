import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (

            <nav>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default Header
