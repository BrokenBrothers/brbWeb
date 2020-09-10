// component es un fragmento de codigo reutilizable que retorna un elemento react
// fragment permite fragmentar el codigo dentro de un componente
import React, { Component, Fragment } from 'react';
// permite exportar una alerta a otros componentes
import { withAlert } from 'react-alert';
// connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos
import PropTypes from 'prop-types';


// componente  alerts que va a ser llamado en los diferentes componentes
export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) { // se actualiza el componente con el error
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.subject) alert.error(`Subject: ${error.msg.subject.join()}`); // errores de la api sobre el campo
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);// errores de la api sobre el campo
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);// errores de la api sobre el campo
        }
        if (message !== prevProps.message) {// mensajes de alerta sobre la app
            if (message.deleteContact) alert.success(message.deleteContact); // aletar de eliminacion de un contacto
            if (message.addContact) alert.success(message.addContact);// aleta de contacto agregado 
        }

    }
    render() {
        return (
            <Fragment />


        )
    }
}
// estado actual del error
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});
//  le envia el mapa de accesorios y se envia la alerta por medio de la libreria
export default connect(mapStateToProps)(withAlert()(Alerts))// se envia la alerta por medio de la libreria