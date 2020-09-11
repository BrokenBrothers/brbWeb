// component es un fragmento de codigo reutilizable que retorna un elemento react
import React, { Component } from 'react'
// Link permite realizar una navegacion dentro de la aplicacion
// Redirect permite crear redirecciones a partir de una accion
import { Link, Redirect } from 'react-router-dom';
//  connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos(validaciones)
import PropTypes from 'prop-types';
// importacion de la accion register
import { register } from '../../redux/actions/auth';
// importacion de la accion createMessage
import { createMessage } from '../../redux/actions/messages'


/**
 * componenete para el registro  el cual se posee un formulario de registro (username, password, email, password2)
 *  a su vez registrarse en la aplicacion por medio de de una accion register 
 */
export class Register extends Component {
    state = { // se crean las variable de estado para la nueva insercion
        username: '',
        email: '',
        password: '',
        password2: '',
    };
    static propTypes = {// permite definir una serie de validaciones en el componente en el momento de su creacion
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };
    // captura el boton submit tiene un evento
    onSubmit = (e) => {
        e.preventDefault();// evita la configuracion predeterminada
        const { username, email, password, password2 } = this.state; // // se obtienen los campos para el esatdo
        if (password !== password2) {// validacion de confirmacion de contraseña
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });// creacion de accion de mensaje (passwordNotMatch) 
        } else {
            const newUser = { // se crea el nuevo usuario con los campos obtenidos
                username,
                password,
                email,
            };
            this.props.register(newUser);// se llama a la accion register que permite registrar un usuario
        }
    };
    // captura el cambio de una variable y se edita el estado de la misma por medio de setState. 
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value// agrega a cada nombre del estado(cantidad de input) su respectivo valor
    });

    render() {
        if (this.props.isAuthenticated) {// se valida el estado del usuario por medio de la variable autenticacion
            return <Redirect to="/" />; // si se encuentra autenticado se retorna a la pagina principal
        }
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
                            name="username"
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
const mapStateToProps = (state) => ({ // permite extraer los objetos de un estado actualizado para pasarlos al reducer para que este pueda actualizarlos
    isAuthenticated: state.auth.isAuthenticated,
});

//  le envia el mapa de accesorios  y  la accion  login 
export default connect(mapStateToProps, { register, createMessage })(Register);