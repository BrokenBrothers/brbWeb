// component es un fragmento de codigo reutilizable que retorna un elemento react
// fragment permite fragmentar el codigo dentro de un componente
import React, { Component, Fragment } from 'react';
// react-dom  permite renderizar elementos react retornando una referencia del componente
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';// enrutador de url, permite tener maás de una vista en la aplicación
import { Provider as AlertProvider } from 'react-alert'; // globaliza las alertas de la app
import AlertTemplate from 'react-alert-template-basic'; // plantilla de alerta de reaccion

import Header from './layout/Header'; // componente Header
import Dashboard from './contacts/Dashboard'; // componente Dashboard
import Alerts from './layout/Alerts'; // componente alerta
import Login from './accounts/Login'; // componente Login
import Register from './accounts/Register'; // componente Register
import PrivateRoute from './common/PrivateRoute'; // componente PrivateRoute


import { Provider } from 'react-redux'; //  permite globalizar el store para todos los componentes
import store from '../redux/store'; // es un objeto que mantiene el arbol de estados de la aplicacion, siendo este el unico en la misma
import { loadUser } from '../redux/actions/auth';
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
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions} >
                    <Router>
                        <Fragment>

                            <div>
                                <Header />
                                <Alerts />
                            </div>
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'));
