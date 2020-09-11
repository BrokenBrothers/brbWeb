import axios from 'axios';
import { returnErrors } from './messages'; // permite agregar un error al estado de errores
import {
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    USER_LOADING,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';// typos de acciones

// permite manejar las acciones del del usuario  en la aplicación
export const loadUser = () => (dispatch, getState) => {

    dispatch({// permite identificar que el usuario se encuentra cargando el login
        type: USER_LOADING
    });

    // se hace la peticion a la API 
    axios
        .get('/api/auth/user', tokenConfig(getState))// se realiza una petición get que permite saber si las credenciales del usuario actual son validas
        .then(res => {// res permite obtener la data del usuario actual

            dispatch({// si la url no respon de con un error se procede a pasar el esatdo del usuario a USER_LOADED
                type: USER_LOADED,// estado del usuario si no ocurren errores
                payload: res.data // data del estadp
            });

        }).catch(err => {// se ejecuta cuando ha ocurrido un error en la respuesta de la API


            dispatch({// se procede a pasar a estado AUTH_ERROR que permite reiniciar el estado
                type: AUTH_ERROR
            });
            dispatch(returnErrors( // se crea un nuevo error con la data devuelta por la api
                err.response.data,
                err.response.status
            ));
        });
}


// permite manejar las acciones del login en la aplicación, este recibe los datos del formulario de login
export const login = (username, password) => dispatch => {


    // se hace una configuracion de la url
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    //se le da un formato a los datos que van a ser enviados por medio de JSON.stringify
    const body = JSON.stringify({ username, password });

    // se hace la peticion a la API 
    axios
        .post('api/auth/login', body, config)// se realiza una petición POST que permite enviar los datos de las credenciales
        .then(res => {//  res permite obtener la data

            dispatch({// si la url no respon de con un error se procede a pasar el esatdo del login a LOGIN_SUCCESS
                type: LOGIN_SUCCESS,// estado del login si no ocurren errores
                payload: res.data // data del estado
            });


        }).catch(err => {// se ejecuta cuando ha ocurrido un error en la respuesta de la API
            console.log(err.response.data)

            dispatch({// se procede a pasar a estado AUTH_ERROR que permite reiniciar el estado
                type: LOGIN_FAIL
            });
            dispatch(returnErrors( // se crea un nuevo error con la data devuelta por la api
                err.response.data,
                err.response.status
            ));
        });

}
export const logout = () => (dispatch, getState) => {
    axios
        .post('/api/auth/logout/', null, tokenConfig(getState))
        .then((res) => {

            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

// REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};
// SConfiguracion del token
export const tokenConfig = (getState) => {

    // se obtiene el token del estado actual
    const token = getState().auth.token;
    // se hace una configuracion para poder enviar el token por la url
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    // se asocia el token a la url si este es diferente de null

    config.headers['Authorization'] = `Token ${token}`;


    return config;
};

