// component es un fragmento de codigo reutilizable que retorna un elemento react
import React, { Component } from 'react';
// connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos
import PropTypes from 'prop-types';
// se obtienen las acciones que se desean realizar para el contacto en esta clase
import { addContact } from '../../redux/actions/contact'

// componente 
export class Form extends Component {
    // se crean las variable de estado para la nueva insercion
    state = {
        subject: "",
        email: "",
        message: "",

    };
    static propTypes = {// permite definir una serie de validaciones en el componente en el momento de su creacion
        addContact: PropTypes.func.isRequired
    };
    // captura el cambio de una variable y se edita el estado de la misma por medio de setState. 
    onChange = e => this.setState({
        [e.target.name]: e.target.value // agrega a cada nombre del estado(cantidad de input) su respectivo valor
    });
    // captura el boton submit tiene un evento
    onSubmit = e => {
        e.preventDefault(); // evita la configuracion predeterminada
        const { subject, email, message } = this.state; // se obtienen los campos 
        const contact = { subject, email, message }; // se crea el contact con los campos obtenidos
        this.props.addContact(contact); // se agrega el contact al estado por medio de la accion que luego pasara por el reducer
        this.setState({ // se resetean los campos de la interfaz 
            subject: "",
            email: "",
            message: ""

        });
    }
    render() {
        const { subject, email, message } = this.state; // asocia las variables de la interfaz con el estado
        // se pinta la interfaz
        return (

            <div>
                <h2>Add Contact</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Subject </label>
                        <input
                            type="text"
                            name="subject"
                            onChange={this.onChange} // permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={subject}
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
                        <label>Message</label>
                        <input

                            type="text"
                            name="message"
                            onChange={this.onChange}// permite activar el cambio de estado cuando se ingresa un cambio en el campo
                            value={message}
                        />
                    </div>

                    <div>
                        <button typy="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
// se llama la accion a realizar, y el mapa de accesorios se pasa en null
// no es necesario enviar el mapStateProps devido a que es una nueva inserción 
export default connect(null, { addContact })(Form);
