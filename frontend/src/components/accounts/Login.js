// component es un fragmento de codigo reutilizable que retorna un elemento react
import React, { Component } from 'react';
// Link permite realizar una navegacion dentro de la aplicacion
// Redirect permite crear redirecciones a partir de una accion
import { Link, Redirect } from 'react-router-dom';
//  connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos(validaciones)
import PropTypes from 'prop-types';
// importacion de la accion login
import { login } from '../../redux/actions/auth';

/**
 * componenete para el login  el cual se posee un formulario de login (username, password)
 *  a su vez loguearse en la aplicacion por medio de de una accion login 
 */
export class Login extends Component {
    state = { // se crean las variable de estado para la nueva insercion
        username: '',
        password: ''
    };
    static propTypes = { // permite definir una serie de validaciones en el componente en el momento de su creacion
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    // captura el boton submit tiene un evento
    onSubmit = (e) => {
        e.preventDefault();// evita la configuracion predeterminada
        this.props.login(this.state.username, this.state.password);// se hace el llamado a la accion login enviando por parametro el usuario y la contraseña
    };

    // captura el cambio de una variable y se edita el estado de la misma por medio de setState. 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });// agrega a cada nombre del estado(cantidad de input) su respectivo valor

    render() {
        if (this.props.isAuthenticated) {// se valida el estado del usuario por medio de la variable autenticacion
            return <Redirect to="/" />; // se se encuentra autenticado se retorna a la pagina principal
        }
        const { username, password } = this.state; // asocia las variables de la interfaz con el estado
        // se pinta la interfaz
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
const mapStateToProps = (state) => ({ // permite extraer los objetos de un estado actualizado para pasarlos al reducer para que este pueda actualizarlos
    isAuthenticated: state.auth.isAuthenticated,
});
//  le envia el mapa de accesorios  y  la accion  login 
export default connect(mapStateToProps, { login })(Login);
