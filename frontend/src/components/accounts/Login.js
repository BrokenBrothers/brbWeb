import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

export class Login extends Component {
    state = { // se crean las variable de estado para la nueva insercion
        username: '',
        password: ''
    };
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.onChange} // permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={username}
                        />
                    </div>
                    <div>
                        <label>password</label>
                        <input

                            type="text"
                            name="password"
                            onChange={this.onChange}// permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={password}
                        />
                    </div>
                    <div>
                        <button typy="submit">Login</button>
                    </div>
                    <p>
                        Don't hace an account?
                        <Link to="/register">Register</Link>
                    </p>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
