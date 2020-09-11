import React from 'react';

import { Route, Redirect } from 'react-router-dom';
//  connect es una funcion que permite conectar un componente de react con el store
import { connect } from 'react-redux';
// PropTypes permite especificar las propiedades de un componente en especifico y los tipos de datos(validaciones)
import PropTypes from 'prop-types';


/**
 * componenete que permite redirigir a los componenetes privados
 * por medio del estado de auth
 */
const PrivateRoute = ({ component: Component, auth, ...rest }) => ( // se obtiene el componenete, el esatdo de auth
    <Route
        {...rest}
        render={(props) => {

            if (auth.isLoading) {// el auth se encuentra cargado devolverá un mensaje de carga
                return <h2>Loading...</h2>;
            } else if (!auth.isAuthenticated) {// si el usuario no se encuentra autenticado siempre lo enviará al login
                return <Redirect to="/login" />;
            } else {// si el usuario cumple con lo anterior se rederizan las propiedades de componenete
                return <Component {...props} />;
            }
        }}
    />

);

/// permite extraer los objetos de un estado actualizado para pasarlos al reducer para que este pueda actualizarlos
const mapStateToProps = (state) => ({
    auth: state.auth
});
//  le envia el mapa de accesorios  y  el componente
export default connect(mapStateToProps)(PrivateRoute);