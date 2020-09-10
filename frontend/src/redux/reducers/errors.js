// tipos de acciones para la funcion reductura
import { GET_ERRORS } from '../actions/types';

// estado inicial del reducer errors
const initialState = {
    msg: {},
    status: null
}
/*
    Funcion reductora errors
    state: estado actual
    action: accion que edita el estado
    return: estado editado por la accion
 */
export default function (state = initialState, action) {
    switch (action.type) { // tipos de la accion para editar el estado
        case GET_ERRORS:// accion obtener los errores
            return {
                msg: action.payload.msg, // mensaje de error 
                status: action.payload.status // cambio de estado del error editado
            };
        default:
            return state; //  si no se encuentra la accion retorna el estado inicial
    }

}