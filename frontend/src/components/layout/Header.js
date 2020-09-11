import React, { Component } from 'react'
// Link permite realizar una navegacion dentro de la aplicacion
import { Link } from 'react-router-dom';
//  connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos(validaciones)
import PropTypes from 'prop-types';
// importacion de la accion logout
import { logout } from '../../redux/actions/auth';

/**
 * componenete que contiene la barra de navegacion de la aplicacion y el header
 * 
 */
export class Header extends Component {
    static propTypes = {// permite definir una serie de validaciones en el componente en el momento de su creacion
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const { isAuthenticated, user } = this.props.auth; // se obtienen las variables de estado
        const authLinks = (// se crea un codigo para html asociado a una constante, en este se hace el llamado a la accion  logout
            <ul>
                <strong>{user ? `welcome: ${user.username}` : ""}</strong>
                <li>
                    <button onClick={this.props.logout} >Logout</button>
                </li>
            </ul>
        );
        const guestLinks = (// se crea un codigo para html asociado a una constante
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>


            </ul>
        );
        return (// se define que variable pintar en el header dependiendo de la autenticacion del usuario

            <nav>
                {isAuthenticated ? authLinks : guestLinks}
            </nav>

        )
    }
}
// permite extraer los objetos de un estado actualizado para pasarlos al reducer para que este pueda actualizarlos
const mapStateProps = state => ({
    auth: state.auth
});
//  le envia el mapa de accesorios  y  la accion  logout 
export default connect(mapStateProps, { logout })(Header);
