// component es un fragmento de codigo reutilizable que retorna un elemento react
// fragment permite fragmentar el codigo dentro de un componente
import React, { Component, Fragment } from 'react';
// react-dom  permite renderizar elementos react retornando una referencia del componente
import ReactDOM from 'react-dom';

import Header from './layout/Header'; // componente Header

import Dashboard from './contacts/Dashboard'; // componente Dashboard
import { Provider } from 'react-redux'; //  permite globalizar el store para todos los componentes
import store from '../store'; // es un objeto que mantiene el arbol de estados de la aplicacion, siendo este el unico en la misma

/*
    Componenete principal de la aplicacion, en este se llaman los demas componenetes referenciados por medio de 
    react-dom
*/
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Fragment>

                    <div>
                        <Header />
                    </div>

                    <Dashboard />

                </Fragment>
            </Provider>

        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'));
