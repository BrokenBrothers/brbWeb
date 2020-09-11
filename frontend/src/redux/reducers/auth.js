import { // importacion de los typos de acciones para la funcion reductora auth
    AUTH_ERROR,
    USER_LOADED,
    USER_LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'
const initialState = {// estado inicial de la funcio reductura auth
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}
/**
 * funcion reductora que permite identificar  los diferentes estados y así editar el mismo esatdo
 * @param {*} state  estado inicial 
 * @param {*} action  accion que modifica el esdo
 * @returns estado final despues de la accion
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING: // tipo de acción en el cual el usuario se encutra cargado la authenticacion
            return {//se edita el esatdo del auth 
                ...state,
                isLoading: true
            };
        case USER_LOADED:// usuario logueado (credenciales correctas)
            return {//se edita el esatdo del auth 
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload // se obtiene la data del usuario(payload contiene la data del usuario)
            };
        case LOGIN_SUCCESS: // usuario logueado correctamente
        case REGISTER_SUCCESS: // usuario registrado correctamente
            localStorage.setItem('token', action.payload.token) // se obtiene la data del token
            return {//se edita el esatdo del auth 
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {//se edita el esatdo del auth 
                ...state,
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            };

        default://se envia el stado inicial sin  editar
            return state;
    }
}