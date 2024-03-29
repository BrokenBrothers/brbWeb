// component es un fragmento de codigo reutilizable que retorna un elemento react
// fragment permite fragmentar el codigo dentro de un componente
import React, { Component, Fragment } from 'react';
// connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos(validaciones)
import PropTypes from 'prop-types';
// se obtienen las acciones que se desean realizar para el contacto
import { getContact, deleteContact } from '../../redux/actions/contact';

/**
 * componenete para el contacto en el cual se listas los contactos por medio de la accion getcontact
 * y a su vez permite eliminar contactos por medio de la accion deletecontact
 */
export class Contact extends Component {
    static propTypes = { // permite definir una serie de validaciones en el componente en el momento de su creacion
        contact: PropTypes.array.isRequired, // Todos los PropTypes son requeridos 
        getContact: PropTypes.func.isRequired,
        deleteContact: PropTypes.func.isRequired
    };
    componentDidMount() { // permite cargar los datos de contacto al componente por medio de la accion getcontact.  Se produce inmediatamente después del primer renderizado
        this.props.getContact(); // datos a montar en el componente
    }
    // se pinta la interfaz
    render() {
        return (
            <Fragment>
                <h2>Contact</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contact.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id} </td>
                                <td>{contact.email} </td>
                                <td>{contact.message} </td>
                                <td>{contact.subject} </td>
                                <td>{contact.date} </td>
                                <td><button onClick={this.props.deleteContact.bind(this, contact.id)}>{" "}Delete</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({// permite extraer los objetos de un estado actualizado para pasarlos al reducer
    contact: state.contact.contact

});
//  le envia el mapa de accesorios  y se llama la accion a realizar
export default connect(mapStateToProps, { getContact, deleteContact })(Contact); 
