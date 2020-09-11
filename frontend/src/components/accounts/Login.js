import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    state = { // se crean las variable de estado para la nueva insercion
        username: '',
        password2: ''
    };
    onSubmit = e => {
        e.preventDifault();
        console.log('submit')
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { username, password } = this.state // asocia las variables de la interfaz con el estado
        // se pinta la interfaz
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>username </label>
                        <input
                            type="text"
                            name="usename"
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
                        <Link to="/login">Register</Link>
                    </p>
                </form>
            </div>
        )
    }
}
export default Login;