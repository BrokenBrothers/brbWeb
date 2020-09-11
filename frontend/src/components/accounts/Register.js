import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {
    state = { // se crean las variable de estado para la nueva insercion
        username: '',
        email: '',
        password: '',
        password2: ''
    };
    onSubmit = e => {
        e.preventDifault();
        console.log('submit')
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { username, email, password, password2 } = this.state // asocia las variables de la interfaz con el estado
        // se pinta la interfaz
        return (
            <div>
                <h2>Register</h2>
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
                        <label>Email</label>
                        <input

                            type="email"
                            name="email"
                            onChange={this.onChange}// permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={email}
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
                        <label>password2</label>
                        <input

                            type="text"
                            name="password2"
                            onChange={this.onChange}// permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={password2}
                        />
                    </div>

                    <div>
                        <button typy="submit">Register</button>
                    </div>
                    <p>
                        Already hace an account
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        )
    }
}
export default Register