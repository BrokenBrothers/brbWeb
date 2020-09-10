// component es un fragmento de codigo reutilizable que retorna un elemento react
// fragment permite fragmentar el codigo dentro de un componente
import React, { Component, Fragment } from 'react';
// react-dom  permite renderizar elementos react retornando una referencia del componente
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert'; // globaliza las alertas de la app
import AlertTemplate from 'react-alert-template-basic'; // plantilla de alerta de reaccion
import Header from './layout/Header'; // componente Header

import Dashboard from './contacts/Dashboard'; // componente Dashboard
import Alerts from './layout/Alerts'; // componente alerta
import { Provider } from 'react-redux'; //  permite globalizar el store para todos los componentes
import store from '../redux/store'; // es un objeto que mantiene el arbol de estados de la aplicacion, siendo este el unico en la misma

// configuraciones de las alertas
const alertOptions = {
    timeout: 3000, // 3 segundos
    position: 'top center' // arriba y centrado
}
/*
    Componenete principal de la aplicacion, en este se llaman los demas componenetes referenciados por medio de 
    react-dom
*/
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions} >
                    <Fragment>

                        <div>
                            <Header />
                            <Alerts />
                        </div>

                        <Dashboard />

                    </Fragment>
                </AlertProvider>
            </Provider>

        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'));
